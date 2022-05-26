import { useAddress, useDisconnect, useMetamask, useSigner } from '@thirdweb-dev/react'
import { getNonceForUser, authenticateUserWithSignedMessage } from './services/users'
import { TaskList } from './components/taskList'
import { userState } from './state/task'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://humandao.org/">
        humanDAO
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {

  const signer = useSigner()
  const address = useAddress();
  const [user, setUser] = useRecoilState(userState);

  async function signMessage() {
    let result = await getNonceForUser(address)
    console.log('got nonce: ', result.nonce)
    const signedMessage = await signer.signMessage(`Please, sign this message to login to the PA app (${result.nonce}).`)
    result = await authenticateUserWithSignedMessage(address, signedMessage)
    setUser({ token: result.token, address })
    console.log("authentication result", result)
  }

  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  return (
    <RecoilRoot>
      <Container maxWidth="sm">
        <div className="my-4">
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Pocket Assistant by humanDAO
          </Typography>
          <Slider
            className="my-4"
            defaultValue={30}
            classes={{ active: 'shadow-none' }}
            componentsProps={{ thumb: { className: 'hover:shadow-none' } }}
          />
            {address ? (
              <>
                <button onClick={disconnectWallet}>Disconnect Wallet</button>
                <p>Your address: {address}</p>
              </>
            ) : (
              <button onClick={connectWithMetamask}>Connect with Metamask</button>
            )}
            <div>User with token: {user.token}</div>
            <button onClick={signMessage}>Login</button>
            <button onClick={() => alert(address)}>Alert</button>
            <TaskList></TaskList>
          <Copyright />
        </div>
      </Container>
    </RecoilRoot>
  )
}

export default App;

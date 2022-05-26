// import 'dotenv/config' 

const getNonceForUser = async function(address) {
  console.log(process.env.API_URL)
  console.log('going to get nonce for this address', address)
  const response = await fetch(process.env.API_URL + `/api/user/${address}`, {
    method: 'GET',
    // headers: {'Content-Type': 'application/json'},
    // body: JSON.stringify({ address })
  })
  return await response.json()
}

const authenticateUserWithSignedMessage = async function(address, message) {
  console.log(process.env.API_URL)
  console.log('going to authenticate using the signed message', address)
  const response = await fetch(process.env.API_URL + `/api/auth/`, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain'},
    body: JSON.stringify({ address, message })
  })
  return await response.json()
}

export { getNonceForUser, authenticateUserWithSignedMessage }
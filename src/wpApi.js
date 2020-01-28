import WPAPI from 'wpapi'

let endpoint = WP.api
if (typeof window !== 'undefined')
{
  endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`
}

const wpApi = new WPAPI({ endpoint })
export default wpApi

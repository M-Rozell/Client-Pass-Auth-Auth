
export const TOKEN_KEY = 'token'; //we use a variable so we don't have to typo a string over and over again
// mess it up or change it and go "I changed the key, now I have to go to 15 components
// and change one string value"- instead you change the single source of truth
// and everything should update with it.

export async function apiService(uri, method = 'GET', data) {


    const TOKEN = localStorage.getItem(TOKEN_KEY);

    const headers = {
        'Content-Type': 'application/json'
    }

    const fetchOptions = {
        method,
        headers,
        body: JSON.stringify(data)

    }



    //micro optimization//if the method is a GET request you typically don't send request bodies, which means we don't have to specify specific content type, so we write the following deletions. 
if (method === 'GET') {
            delete headers['Content-Type'];
            delete fetchOptions.body;

        }

    if (TOKEN) { //if there is a token present, we apply to our headers object, a key of Authorization, with a value of Bearer space and the token 
        headers['Authorization'] = `Bearer ${TOKEN}`
    }



    try {

        const res = await fetch(uri, fetchOptions);

        

        if (res.status === 400) {
            throw new Error('check fetch options for any errors');
        }

        if (res.status === 401) {
            throw new Error('no token, expired token, or server could not validate token');
        }

        if (res.status === 404) {
            throw new Error('the server endpoint path was not found');
        }

        if (res.status === 500) {
            throw new Error('server sploded, check the terminal logs')
        }

        if (res.ok) {
            return await res.json();
        }


    } catch (error) {
        console.error('[error in apiService]', error.message);
        throw error;
    }

}
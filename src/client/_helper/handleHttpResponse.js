export function handleHttpResponse(response) {
    return response.text().then(
        text => {
            console.log('hi i am in handle response ', text);
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    //logout()
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
};
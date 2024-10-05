export default function getResponseFromAPI(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                status: 200,
                data: "connection established",
            }
            resolve(response);
        }, 1000);
    });
}

export function getResponseFromAPI(){
    return new Promise((resolve) =>{
        const response = {
            status: 200,
            data: "connection established",
        };
        resolve(response);
    });
}

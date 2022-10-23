export const getData = async (param) => {
    try {
        const data = await fetch(`http://localhost:3000/${param}`);
        const dataJSON = await data.json();
        return dataJSON;
    }   catch (error) {
        console.log("Error", error);
    }
}
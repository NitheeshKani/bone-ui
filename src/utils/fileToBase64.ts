const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            // Remove the "data:*/*;base64," prefix
            const base64Data = (reader.result as string).split(",")[1]
            resolve(base64Data)
        }
        reader.onerror = (error) => reject(error)
    })
}

export default fileToBase64
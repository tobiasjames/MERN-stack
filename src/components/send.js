function Form() {

    return (
        <div>
            <form method={"POST"} action={"http://localhost:5000"}>
                <label>Input data: </label>
                <input type="string" name={"data"}/>

                <label>Input password to encrypt data: </label>
                <input type={"string"} name={"password"}/>

                <input type={"submit"} value={"save"}/>
            </form>
        </div>
    )
}

export default Form
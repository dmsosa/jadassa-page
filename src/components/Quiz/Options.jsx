function Options({ options, selectedOptions, handleSelectOption }) {

    const indexToLetter = (index) => {
        switch (index) {
            case 0: 
                return "A";
            
            case 1: 
                return "B";
            
            case 2: 
                return "C";
            
            case 3: 
                return "D";
            
            default: 
                return "";

        }
    }
    return (
        options.map((option, optionIndex) => 
            <div 
            className={`option-container noanswer option${optionIndex}`}
            key={optionIndex} 
            onClick={() => handleSelectOption(optionIndex)}>
                <div className="letter">{indexToLetter(optionIndex)}</div>
                <p>{option}</p>
                <div className="custom-checkbox">
                    <input type="checkbox" checked={selectedOptions.includes(optionIndex)} readOnly></input>
                    <span className="checkmark"></span>
                </div>
            </div>
        )
    )
}

export default Options;
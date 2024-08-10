function ProgressBar({ finalScore }) {
    const currentProgress = Math.round((finalScore/10000) * 100);
    

    let backgroundColor;
    if (currentProgress < 20) {
        backgroundColor = "#de2626";
    } else if (20 < currentProgress && currentProgress <= 40) {
        backgroundColor = "#ed5624";
    }
    else if (40 < currentProgress && currentProgress <= 55) {
        backgroundColor = "#ed8c24";
    }
    else if (55 < currentProgress && currentProgress  <= 70) {
        backgroundColor = "#edc124";
    }
    else if (70 < currentProgress && currentProgress  <= 80) {
        backgroundColor = "#d9ed24";
    }
    else if (80 < currentProgress && currentProgress  <= 90) {
        backgroundColor = "#aaed24";
    }
    else if (90 < currentProgress && currentProgress  <= 99) {
        backgroundColor = "#8fed24";
    }
    else if (currentProgress === 100) {
        backgroundColor = "#38ed24";
    }

    return (
        <div className="progress-wrap">
            <p>Current score: {Math.round(finalScore)}</p>
            <div className="progress">
                <div className="bar"
                style={{
                    backgroundColor: backgroundColor,
                    width: `${currentProgress}%`
                }}
                ></div>
                <span>{currentProgress}% / 100%</span>
            </div>
        </div>
    )
};

export default ProgressBar;
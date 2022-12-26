import React from "react";

<Rank name={this.state.user.name} entries={this.state.user.entries}/>

const Rank = ({ name, entires }) => {
    return (
        <div>
            <div className="white f3">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f1">
                {entires}
            </div>
        </div>
    );
}

export default Rank;
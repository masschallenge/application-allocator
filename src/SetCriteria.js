import React from "react";
import { Button, Table } from "semantic-ui-react";
import CriterionEditRow from "./CriterionEditRow";
import SetCriteriaHeader from "./SetCriteriaHeader";
import EditCriteriaForm from "./EditCriteriaForm";
import JudgingRoundSelector from "./judging_round_selector";
import { cloneCriteriaURL } from "./utils";

class SetCriteria extends React.Component {
  constructor(props) {
    super(props);
    this.judging_round = 56; // change this once app-allocator-setup is calling this page
    this.cloneCriteria = this.cloneCriteria.bind(this);
  }
  state = {
    judging_round: null
  };
  select_judging_round = (_, data) => {
    this.setState({ clone_judging_round: data.value });
  };
  cloneCriteria = () => {
    return fetch(cloneCriteriaURL, {
      credentials: "include",
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        source_judging_round_id: this.state.clone_judging_round,
        target_judging_round_id: this.judging_round
      })
    }).then(this.setState({ key: Math.random() }));
  };

  render() {
    return (
      <div>
            <SetCriteriaHeader />
        <JudgingRoundSelector on_select={this.select_judging_round} />
        <Button onClick={this.cloneCriteria}>Clone</Button>
        <EditCriteriaForm judging_round_id={this.judging_round} />
      </div>
    );
  }
}

export default SetCriteria;

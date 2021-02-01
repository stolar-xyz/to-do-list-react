import React from "react";
import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllAsDone, deleteAll }) => (
    tasks.length > 0 && (
        <Wrapper>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Show done tasks" : "Hide done tasks"}
            </Button>
            <Button
                onClick={markAllAsDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Mark all as done
                </Button>
            <Button
                onClick={deleteAll}
            >
                Delete all
            </Button>
        </Wrapper>
    )
);

export default Buttons;
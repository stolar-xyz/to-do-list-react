import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../../tasks/tasksSlice";

const Buttons = ({ markAllAsDone, deleteAll }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <Wrapper>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
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
};

export default Buttons;
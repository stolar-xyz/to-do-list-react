import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { toggleHideDone, deleteAllTasks, markAllAsDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../../tasks/tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <Wrapper>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Show done tasks" : "Hide done tasks"}
                </Button>
                <Button
                    onClick={() => dispatch(markAllAsDone())}
                    disabled={isEveryTaskDone}
                >
                    Mark all as done
                    </Button> 
                <Button
                    onClick={() => dispatch(deleteAllTasks())}
                >
                    Delete all
                </Button>
            </Wrapper>
        )
    );
};

export default Buttons;
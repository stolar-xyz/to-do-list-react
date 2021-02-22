import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
    toggleHideDone,
    deleteAllTasks,
    markAllAsDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {areTasksEmpty ?
                <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                >
                    Download sample tasks
                </Button>
                :
                <>
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
                </>
            }
        </Wrapper>
    );
};

export default Buttons;
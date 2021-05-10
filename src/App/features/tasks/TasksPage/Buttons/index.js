import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button, Loading } from "./styled";
import {
    toggleHideDone,
    deleteAllTasks,
    markAllAsDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks,
    selectLoading
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const stateOfLoading = useSelector(selectLoading)

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {areTasksEmpty ?
                <>
                    {stateOfLoading ?
                        <Loading>
                            Loading...
                        </Loading>
                        :
                        <Button
                            onClick={() => dispatch(fetchExampleTasks())}
                        >
                            Download sample tasks
                        </Button>
                    }
                </>
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
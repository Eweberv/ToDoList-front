import './App.css'
import TodoList from "./components/TodoList.tsx";
import {Box, Typography} from "@mui/material";

function App() {
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                {/*<MenuPanel></MenuPanel>*/}
                <Typography variant="h3" sx={{margin: "40px"}}>
                    <TodoList/>
                </Typography>
            </Box>
        </Box>
    )
}

export default App

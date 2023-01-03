import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";

interface EnhancedTableToolbarProps {
    numSelected: number;
    numRows: number;
    addHandler:() => void
}

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected, addHandler, numRows } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
        <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
        >
            Cartelle sociali - {numRows}
        </Typography>
        <Tooltip title="Aggiungi">
            <IconButton onClick={addHandler}>
                <AddIcon />
            </IconButton>
        </Tooltip>
        </Toolbar>
    );
};

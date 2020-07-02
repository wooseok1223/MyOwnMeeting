import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [area, setArea] = React.useState('');
    const [habbit, setHabbit] = React.useState('');

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };
    const handleChangeHabbit = (event) => {
        setHabbit(event.target.value);
    };

    const AreaList = ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구',
        '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']

    const Entertainment = ['노래', '사진', '여행', '음식', '공부(스터디)']

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">지역</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={area}
                    onChange={handleChangeArea}
                >
                    {AreaList.map((iter, idx) => (
                        <MenuItem value={10 * idx}>{iter}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">홍미</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={habbit}
                    onChange={handleChangeHabbit}
                >
                    {Entertainment.map((iter, idx) => (
                        <MenuItem value={10 * idx}>{iter}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
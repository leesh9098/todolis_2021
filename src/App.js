import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField label="제목" size="normal" margin="normal" fullWidth required />
          <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline />
          <KeyboardDatePicker
            disableToolbar
            varient="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value) => console.log(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            onChange={(value) => console.log(value)}
            style={{ width: '50%' }}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <TextField label="완료 예정일" type="datetime-local" InputLabelProps={{ shrink: true }} />
        </div>
        <div className="list_area">리스트 영역</div>
        <Typography varient="body2" color="testSecondary" align="center">
          {'Copyright ⓒ Leesh ' + new Date().getFullYear() + '.'}
        </Typography>
      </div>
    );
  }
}

export default App;

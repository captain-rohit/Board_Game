function move_up(board,x,y){
  if(y-1>=0 && board[x][y-1]==0){
    var ele = board[x+1][y+1];
    for(var i=x; i<=x+100; x++){
      board[i][y-1] = ele;
      board[i][y+100] = 0;
    }
  }
  else{}
}

function move_down(board,x,y){
  if(y+101<=600 && board[x][y+101]==0){
    var ele = board[x+1][y+1];
    for(var i=x; i<=x+100; x++){
      board[i][y] = 0;
      board[i][y+101] = ele;
    }
  }
  else{}
}

function move_left(board,x,y){
  if(x-1>=0 && board[x-1][y] == 0){
    var ele = board[x+1][y+1];
    for(var i=y; i<=y+100; i++){
      board[x-1][i] = ele;
      board[x+100][i] = 0;
    }
  }
  else{}
}
function move_right(board,x,y){
  if(x+101<=600 && board[x+101][y] == 0){
    var ele = board[x+1][y+1];
    for(var i=y; i<=y+100; i++){
      board[x][i] = 0;
      board[x+101][i] = ele;
    }
  }
  else{}
}


var board = new Array(600);
for (var i = 0; i < board.length; i++) {
    board[i] = new Array(600);
    for(var j=0;j<600;j++){
      board[i][j] = 0;
    }
}

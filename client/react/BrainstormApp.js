app.BrainstormApp = React.createClass({
  render: function(){
    return (
      <div>
        <app.PageNav />
        <app.RoomNavModal roomId='0' />
        <app.PageView />
        <app.User />
        <app.CreateIdea />
        <app.Ideas />
        <app.CreateRoom />
        <app.Rooms />
      </div>
    );
  }
});

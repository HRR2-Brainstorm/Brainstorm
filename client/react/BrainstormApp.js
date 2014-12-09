app.BrainstormApp = React.createClass({
  render: function(){
    return (
      <div>
        <app.User />
        <app.CreateIdea />
        <app.Ideas />
        <app.CreateRoom />
        <app.Rooms />
      </div>
    );
  }
});

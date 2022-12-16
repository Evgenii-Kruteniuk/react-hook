import React from "react";
import "./text.css";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      t: "Тут очень много текста",
      tex: "Введите информацию",
      userData: "",
    };
    this.inputClick = this.inputClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Добрый день!! Продолжаем наш проект. {this.state.t}</h1>
        <p>
          fxgddfjgdfjgfjfgjfgjgfjfgjfdgjgjdjkdkghkjljkl;jk';jkjfdgdgjdfgjfgdjgjfgjgfjgfjfdjfgjfdgjfgjg
        </p>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.tex}
          onChange={(event) => this.setState({ userData: event.target.value })}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
      </div>
    );
  }
  inputClick() {
    this.setState({ tex: "Инфа введена" });
    console.log("Нажмите");
  }
  mouseOver() {
    console.log("Отпустите");
  }
}
export default Text;

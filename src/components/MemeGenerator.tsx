import React, { Component, SyntheticEvent } from "react";

interface State {
  topText: string;
  bottomText: string;
  randomImage: string;
  allMemesImgs: never[];
}

export class MemeGenerator extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemesImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemesImgs: memes });
      });
  }

  handleChange(event: SyntheticEvent) {
    const { name, value } = event.currentTarget as HTMLFormElement;

    if (name === "topText") {
      this.setState({ topText: value });
    } else {
      this.setState({ bottomText: value });
    }
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImgs.length);
    const randomMemeImg = this.state.allMemesImgs[randNum]["url"];
    console.log(randNum);
    this.setState({ randomImage: randomMemeImg });
    // init download
  }

  download = () => {
    console.log("dl lancé");
    console.log("dl lancé test 2");
  };

  render() {
    const { topText, bottomText, randomImage } = this.state;

    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={topText}
            onInput={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={bottomText}
            onInput={this.handleChange}
          />
          <button>CHANGE</button>
        </form>
        <div className="meme">
          <img src={randomImage} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
        <button onClick={this.download}>Download</button>
      </div>
    );
  }
}

export default MemeGenerator;

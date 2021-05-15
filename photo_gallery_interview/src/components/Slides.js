import React, {Component} from 'react';

class Slides extends Component{

    state = {
        data: this.props.slides,
        customSlides: [],
        currentSlide: {},
        restartDisabled: true,
        nextBtnDisabled: false,
        prevBtnDisabled: true
    }

    getSlide = (slideId) => {
        return this.state.customSlides.find(slide =>  slide.id == slideId)
    }

    prevButtonHandler = () => {
        let currentSlideId = this.state.currentSlide.id;
        if (currentSlideId > 0){
            let oneStepBack = this.getSlide(currentSlideId-1);
            this.setState({currentSlide: oneStepBack, nextBtnDisabled: false});
            if (currentSlideId-1 == 0){
                this.setState({currentSlide: oneStepBack, prevBtnDisabled: true, nextBtnDisabled: false, restartDisabled: true});
            }else{
                this.setState({currentSlide: oneStepBack, prevBtnDisabled: false, nextBtnDisabled: false, restartDisabled: false })
            }
        }
    }

    nextBtnHandler = () => {
        if (this.state.currentSlide.id < 4){
            let newSlide = this.getSlide(this.state.currentSlide.id + 1);
            this.setState({currentSlide: newSlide, restartDisabled:false, prevBtnDisabled: false});
        }
        
        if (this.state.currentSlide.id == 3){
            this.setState({nextBtnDisabled: true})
        }
    }

    restartBtnHandler = () => {
        let initialSlide = this.getSlide(0);
        this.setState({currentSlide: initialSlide, restartDisabled: true, prevBtnDisabled: true, nextBtnDisabled: false});
        console.log('restart clicked');
    }

    componentDidMount(){
        let tempSlides = [];
        for (let index = 0; index < this.props.slides.length; index++) {
            let singleSlide = this.props.slides[index];
            singleSlide.id = index;
            tempSlides.push(singleSlide);
        }
        let firstSlide = tempSlides.filter(slide => slide.id == 0)[0];
        this.setState({customSlides: tempSlides, currentSlide: firstSlide});
    }

    render(){
        return (
            <div>
                <div id="navigation" className="text-center">
                    <button 
                        disabled={this.state.restartDisabled}
                        data-testid="button-restart" 
                        className="small outlined"
                        onClick={(event) => this.restartBtnHandler(event.target.dataset.testid)}>Restart</button>
                    
                    <button 
                        disabled={this.state.prevBtnDisabled}
                        data-testid="button-prev" 
                        className="small"
                        onClick={(event) => this.prevButtonHandler(event.target.dataset.testid)}>Prev</button>

                    <button 
                        disabled={this.state.nextBtnDisabled}
                        data-testid="button-next" 
                        className="small"
                        onClick={(event) => this.nextBtnHandler(event.target.dataset.testid)}>Next</button>
                </div>

                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{this.state.currentSlide.title}</h1>
                    <p data-testid="text">{this.state.currentSlide.text}</p>
                </div>
            </div>
        );
    }
}

export default Slides;

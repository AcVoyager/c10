import React from 'react'
import '../styles/Letter.css'
import Para from './Para'

class Letter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paraCounter: -1,
            shownWords: [],
        };
        this.paraLength = MYWORDS.length;
        this.paraEnd = React.createRef();
    }


    handleClick() {
        let counter = this.state.paraCounter + 1;
        if(counter >= this.paraLength)
            return;
        const newShownWords = this.state.shownWords.slice();
        let newPara;
        if(counter === 0) {
            newPara = <Para text={MYWORDS[counter]} onEnd={() => this.scrollToBottom()} style={{"font-size":"2.5rem"}}/>;
        }
        else {
            newPara = <Para text={MYWORDS[counter]} onEnd={() => this.scrollToBottom()}/>;
        }
        newShownWords.push(newPara);
        this.setState({
            paraCounter: counter,
            shownWords: newShownWords,
        });
    }

    scrollToBottom = () => {
        if(this.state.paraCounter < 0)
            return;
        this.paraEnd.current.scrollIntoView({ behavior: "smooth" });
    }

    // componentDidMount() {
    //     this.scrollToBottom();
    // }
      
    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }

    render() {

        return (
            <div className="letter container-fluid">
                <div className="letter-content my-5">
                    {/* <ol>
                        <li>你知道，就算大雨让这座城市颠倒</li>
                        <li>我会给你怀抱</li>
                        <li>受不了，感觉你背影来到</li>
                        <li>写下我，度秒如年难捱的离骚</li>
                    </ol> */}
                    {/* <Para text={MYWORDS[0]}/> */}
                    {this.state.shownWords}
                    <div ref={this.paraEnd} style={{height: "10%"}}/>
                </div>

                <footer className="footer mb-3 mt-auto">
                    <div className="container-fluid">
                        <button className="footer-button" onClick={() => this.handleClick()}>
                            {this.state.paraCounter === -1?
                                "Click here to start~" :
                                this.state.paraCounter >= this.paraLength - 1?
                                    "The End.": "Click here to continue..."
                            }
                        </button>
                    </div>
                </footer>
            </div>
    );

    }

}

export default Letter;

const MYWORDS = [
    "To 柴亦林：",
    "今天是二月的最后一天。冬之末，春之初，我有些话想和你讲。",
    "还记得两周前我突兀地和你讲，“我喜欢你”么？我并非随口一说。只是我当时不知道应该用什么样的方式表达我的想法。经过两周的思考，给你写了这些。",
    "喜欢你是我自己的事情。我渴望你的爱意，渴望占有你。但绝不是请求，不是要求。",
    "等我回去之后，我们能不能重拾两年前秋天遗失的东西？我想认真地和你恋爱。我们认识这么久了，我付出过真情，也有过前科。可是柴，当我每次想起你的时候，我心里会痛，可也会觉得充盈。遇到一个欣慕的人并不容易。",
    "你曾说喜欢我身上的纯良。其实我也没有那么纯良，有时我为了实现目的也会走在一些灰色的区域。但是有一点我可以自信地说，我在与你的关系中，不论丑美，恪守了真诚的原则。",
    "“Love is a touch but yet not a touch.” 我很喜欢这句的意境，但我不认同其做法。我更倾向《绿皮书》中Tony的那句：“世界上满是孤独的人，不敢迈出第一步。”我愿意迈出这一步。",
    "翻看我们的聊天记录，你会发现，我们这两月来，几乎每日联络；而此之前到我们那次分手，几乎是空白。所以我想，我们面对彼此的时候，其实还是挺投缘的吧，只是有时会赌气，会多虑。",
    "对于异地这个问题，我想这个它至少一段时间内不再存在了；如果未来再度出现，我也有信心见招拆招。山海能不能平，全看人有多想平。我记得我们互相交换过人生计划。不论你想出国发展还是继续国内，我的规划都有余地，可以装下我们的关系。我家里也支持我按自己的意愿生活。",
    "我也想让你知道，我不想因为自己的情感直接/间接地影响或者拘束了你的生活和人生规划。所以，如果你愿意，我很开心；如果你需要更多时间想想，我愿意等；如果你觉得不合适，没关系的，也请告诉我。",
    "自我们高中认识有八年，自懵懂时倾心于彼此亦有五载。静心思索对你的心意，似乎一直欠你，欠自己，欠我们一封认真的告白。某种意义上，现在也是一种圆满。",
    "柴，我想去了解你。越过风景明媚的海岸，我也想倾听大洋深处的声音。",
    "谢谢你，看到这里。",
    "徐畅",
];
import Card from '../components/context'
import bankImage from '../components/bank.png'
import '../App.css'

function Home(){
    return (
        <div className="centeredGrid">
        <div></div>
      <Card
        bgcolor="primary"
        cardstyle="small"
        header={(<h3>Welcome to <em>LesNapo</em> Bank SA</h3>)}
        title="It's said that we make a Thousand decisions a day."
        text={(<h5>A Private company and financial services corporation owned by a group of family members, based in Boston, MA. 
        Let's <em>LesNapo</em> Bank helps with the financial ones.</h5>)}
        body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
      />   
      <div></div> 
      </div>
    );  
  }

export default Home;
// import logo from './logo.svg';
// import './App.css';
import './Card.css';
import CardName from './Card.js';




function App() {
    let arr = [
        {
            title: 'Free',
            price: '$0',
            user: 'Single user',
            storage: '5GB Storage',
            domain: 'Free Subdomain'
        }, {
            title: 'Plus',
            price: '$9',
            user: '5 user',
            storage: '50GB Storage',
            domain: 'Free Subdomain'
        }, {
            title: 'Pro',
            price: '$49',
            user: 'Unlimited user',
            storage: '150GB Storage',
            domain: 'Unlimited Free Subdomain'
        }
    ];
    

    return (
        <div className='pricing py-5'>
            <div className='container pb-5'>
                <div className='row'>
                    <CardName title={
                            arr[0].title
                        }
                        
                        price={
                            arr[0].price
                        }
                        user={
                            arr[0].user
                        }
                        storage={
                            arr[0].storage
                        }
                        domain={
                            arr[0].domain
                    }></CardName>
                    <CardName
                    title={
                      arr[1].title
                  }
                  price={
                      arr[1].price
                  }
                  user={
                      arr[1].user
                  }
                  storage={
                      arr[1].storage
                  }
                  domain={
                      arr[1].domain
              }></CardName>
                    <CardName
                    title={
                      arr[2].title
                  }
                  price={
                      arr[2].price
                  }
                  user={
                      arr[2].user
                  }
                  storage={
                      arr[2].storage
                  }
                  domain={
                      arr[2].domain
              }></CardName>

                </div>
            </div>
        </div>


    )

}

export default App;

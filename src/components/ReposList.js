import React from 'react';
import { connect } from 'react-redux';
import Fetch from 'node-fetch';


let listOfRepos=['']; 
let url1;
let url2;
let atualizou;



    
                
function ReposList(props) {

let achou;    

const [  repos, setRepos] = React.useState({})

 
    

    try {


         url1 = "http://api.github.com/search/users?q=" + props.person[0].name;
         atualizou = false;
 
   
   
    
    Fetch(url1)
    
    .then(response => {
        return response.json();})
    .then((data) => {
        try {
            url2 = data.items[0].repos_url;
              
        } catch (error) {
            url2 ='';    
            listOfRepos = [];
            //setRepos(listOfRepos);
            achou=false;
            atualizou = false;
        }
        
        return url2;
    })
    .then((url2) => {
            if(atualizou === false){
            Fetch(url2) 
            .then(response => {
                return response.json();})
            
            .then((data2) => {
 

                listOfRepos=  data2.map((repo, index1) => 
                
                            <tr>
                                <td>{repo.description}</td>
                                <td>{repo.url}</td>
                                <td>{repo.stargazers_count}</td>
                            </tr>)
                            


                setRepos(listOfRepos);
                atualizou=true;
                achou = true;              
                console.log(listOfRepos);
                for(let i=0; i < data2.length; i++) {
                    
                    console.log('Descrição: ' + data2[i].description);
                    console.log('stars: ' + data2[i].stargazers_count);
                    console.log('url: ' + data2[i].url);
                } 

                return (


                        <table>
                            <tr>
                                <th>Description</th>
                                <th>Url</th>
                                <th>Stars</th>
                            </tr>
                            {listOfRepos}
                            </table>

                )

                }) 
               
        
        
        }
        }
        )
        
       
                

        } catch (error) {return ('')
        
    }            
        

                
return (
/*
            <ul>
                {listOfRepos}
            </ul>
*/

            <table>
                            <tr>
                                <th>Description</th>
                                <th>Url</th>
                                <th>Stars</th>
                            </tr>
                            {listOfRepos}
                            </table>
    )
       
 
}




function mapStateToProps(state) {
    return {
        repos: state.repos,
        person: state.person
    }
}

export default connect(mapStateToProps)(ReposList)
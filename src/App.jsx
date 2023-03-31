import React from 'react';
import './App.css'




import Primeiro from './components/Primeiro';
import Comparamentro from './components/Comparamentro';
import Comfilhos from './components/Comfilhos';
import Card from './layout/Card';
import Repeticao from './layout/Repeticao';
import Condicional from './layout/Condicional';
import Pai from './comunicacao/Pai';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
//import Megasena from './megasena/Megasena';
import Sorte from './megasena/Sorte'


export default (props) => (
  
    <div className="App">
      
        <Card titulo="#8 - Danilo">
      <h1>PROJETO DESENVOLVIDO COM REACT</h1> 
      </Card>
        <Card titulo="#8 - Danilo">
      <Sorte qtdeNumero={6} />
    </Card>
       {/* <Card titulo="#7 - Sorteio da mega sena">
      <Megasena  />
</Card>*/}
        <Card titulo="#6 - Formulário">
      <Contador passo={10} />
    </Card>
        <Card titulo="#6 - Formulário">
      <Input />
    </Card>
        <Card titulo="#5 - Condicional">
      <Pai/>
    </Card>
        <Card titulo="#4 - Condicional">
       <Condicional numero={11}/>
    </Card>
        <Card titulo="#3 - Repeição">
       <Repeticao></Repeticao>
    </Card>
        <Card titulo="#2 - Componente filho">
        <Comfilhos>
            <ul>
                <li>Danilo</li>
                <li>Camila</li>
                <li>viviane</li>
                <li>Rafaela</li>
            </ul>
        </Comfilhos>      
    </Card>
        <Card titulo="#1 - Exercício React"><Comparamentro titulo="Hello world"
         subtitulo=" - Aprender react"/> 
          <Primeiro/>
         </Card>
      
   

   
    </div>
);
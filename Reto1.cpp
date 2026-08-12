#include <iostream>

using namespace std;

int main(){
    const int N=6;
    int Lecturas[N]={20,-999,22,24,-999,26};
    int suma=0;
    int validos=0;
    int descartados = 0;
    int error = -999;
    
    for (int i =0; i<N; i++){
        if (Lecturas[i]!=error){
            suma += Lecturas[i];
            validos +=1;
        }
        else{
            descartados +=1;
        }
    }
    double promedio=0.0;
    if(validos>0){
        promedio=(double)suma/N;
    }
    cout<<"El número de válidos es de: "<<validos<<endl;
    cout<<"El número de válidos es de: "<<descartados<<endl;
    cout<<"El valor del promedio es de: "<<promedio<<endl;
    
}
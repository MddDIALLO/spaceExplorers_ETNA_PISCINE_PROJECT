export interface RocketType { 
    type: string;
    chargeCapacity: number;
}

export interface Charge { 
    planet: string;
    weight: number; 
} 

export interface Result { 
    planet: string;
    rockets: { type: string; count: number }[]; 
}
    
export function printResult(results: Result[]) {
    for (const result of results) { 
        console.log(`Planet: ${result.planet}`);
        
        if (result.rockets.length === 0) { 
            console.log('No rockets needed for this mission'); 
        } else { 
            for (const rocket of result.rockets) {
                console.log(`Rocket Type: ${rocket.type}, Count: ${rocket.count}`); 
            } 
        } 
        console.log('*********************************');
    }
}

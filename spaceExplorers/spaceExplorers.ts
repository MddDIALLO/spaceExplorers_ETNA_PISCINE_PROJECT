import { RocketType, Charge, Result } from "./resource";

export default function spaceExplorers(rocketTypes: RocketType[], charges: Charge[]) : Result[] {
    let returnedListOfRocket: Result[] = [];

    for (const item of charges) {
        let trackWeight: number = item.weight;
        let reste: number = 0;
        let counter: number = 0;

        for (const element of rocketTypes) {
            let returnedItem: Result = { planet: '', rockets: [] };

            if(element.chargeCapacity <= trackWeight) {
                if(trackWeight > 0) {
                    reste = trackWeight % element.chargeCapacity;
                    counter = (trackWeight - reste) / element.chargeCapacity;
                    if(counter > 0) {
                        returnedItem.planet = item.planet;
                        returnedItem.rockets.push({ type: element.type, count: counter });

                        let position: number = 0;
                        let checkPlanet: boolean = false;
                        let planetName: string = '';

                        for(let i: number = 0; i < returnedListOfRocket.length; i++) {
                            if(returnedListOfRocket[i].planet === returnedItem.planet) {
                                position = i;
                                checkPlanet = true;
                                planetName = returnedListOfRocket[i].planet;
                            }
                        }

                        if(checkPlanet) {
                            returnedListOfRocket[position].rockets.push({ type: element.type, count: counter });
                        } else {
                            returnedListOfRocket.push(returnedItem);
                        }
                    }
                    trackWeight = reste;
                }
            } 
        }
    }

    return returnedListOfRocket;
}

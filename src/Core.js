const stats =  {
    money: 0,
    bacon: 0,
    wheat: 0,
    rape: 0,
    boughtPigs: 0,
    fedPigs: 0,
    wheatFields: 0,
    rapeFields: 0,
    oil: 0,
    rawBacon: 0
}

const listeners =  {
    money: (val) => {},
    bacon: (val) => {},
    wheat: (val) => {},
    rape: (val) => {},
    boughtPigs: (val) => {},
    fedPigs: (val) => {},
    wheatFields: (val) => {},
    rapeFields: (val) => {},
    oil: (val) => {},
    rawBacon: (val) => {}
}

class Stats {
    static registerListener(type, callback){
        listeners[type] = callback;
    }

    static set money(val){
        stats.money = val;
        listeners.money(stats.money);
    }

    static get money(){
        return stats.money;
    }

    static set bacon(val){
        stats.bacon = val;
        listeners.bacon(stats.bacon);
    }

    static get bacon(){
        return stats.bacon;
    }

    static set wheat(val){
        stats.wheat = val;
        listeners.wheat(stats.wheat);
    }

    static get wheat(){
        return stats.wheat;
    }

    static set rape(val){
        stats.rape = val;
        listeners.rape(stats.rape);
    }

    static get rape(){
        return stats.rape;
    }

    static set boughtPigs(val){
        stats.boughtPigs = val;
        listeners.boughtPigs(stats.boughtPigs);
    }

    static get boughtPigs(){
        return stats.boughtPigs;
    }

    static set fedPigs(val){
        stats.fedPigs = val;
        listeners.fedPigs(stats.fedPigs);
    }

    static get fedPigs(){
        return stats.fedPigs;
    }

    static set wheatFields(val){
        stats.wheatFields = val;
        listeners.wheatFields(stats.wheatFields);
    }

    static get wheatFields(){
        return stats.wheatFields;
    }

    static set rapeFields(val){
        stats.rapeFields = val;
        listeners.rapeFields(stats.rapeFields);
    }

    static get rapeFields(){
        return stats.rapeFields;
    }

    static set oil(val){
        stats.oil = val;
        listeners.oil(stats.oil);
    }

    static get oil(){
        return stats.oil;
    }

    static set rawBacon(val){
        stats.rawBacon = val;
        listeners.rawBacon(stats.rawBacon);
    }

    static get rawBacon(){
        return stats.rawBacon;
    }

    static get object(){
        return stats;
    }
}



class Core {
    static work() {
        Stats.money += 1;
    }

    static sellBacon(){
        if(Stats.bacon > 0){
            Stats.bacon -= 1;
            Stats.money += 15;
        }
    }

    static harvestWheat(){
        if(Stats.wheatFields > 0)
            Stats.wheat += 1;
    }

    static harvestRape(){
        if(Stats.rapeFields > 0)
            Stats.rape += 1;
    }

    static feedPig(){
        if(Stats.boughtPigs > 0 && Stats.wheat > 4){
            Stats.fedPigs += 1;
            Stats.boughtPigs -= 1;
            Stats.wheat -=  5;
        }
    }

    static makeOil(){
        if(Stats.rape > 0){
            Stats.rape -= 1;
            Stats.oil += 1;
        }
    }

    static makeRawBacon(){
        if(Stats.fedPigs > 0){
            Stats.fedPigs -= 1;
            Stats.rawBacon += 1;            
        }
    }

    static fryBacon(){
        if(Stats.rawBacon > 0 && Stats.oil > 1){
            Stats.oil -= 2;
            Stats.rawBacon -= 1;
            Stats.bacon += 1;
        }
    }

    static buyWheatField(){
        if(Stats.money > 99){
            Stats.money -= 100;
            Stats.wheatFields += 1;
        }
    }

    static buyRapeField(){
        if(Stats.money > 99){
            Stats.money -= 100;
            Stats.rapeFields += 1;
        }
    }

    static buyPig(){
        if(Stats.money > 9){
            Stats.money -= 10;
            Stats.boughtPigs += 1;
        }
    }

    static load(){
        const arr = [`money`,`bacon`,`wheat`,`rape`,`boughtPigs`,`fedPigs`,`wheatFields`,`rapeFields`,`oil`,`rawBacon`];
        document.cookie.split(`,`).forEach((elem, i) => {
            Stats[arr[i]] = Number(elem);
        });
    }

    static save(){
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const c = new Date(year + 100, month, day)
        const save = Object.values(Stats.object).join(`,`);
        document.cookie = `${save}; expires=${c}; path=/;`;
    }

    static enableAutosave(){
        this.timer = setInterval(() => this.save(), 1000);
    }

    static disableAutosave(){
        clearInterval(this.timer);
    }
}

export {Core, Stats};
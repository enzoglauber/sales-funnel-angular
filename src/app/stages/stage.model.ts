export class Stage {
    id: string;
    name: string;
    opportunities?: any;
    updated_at?: Date;
    created_at?: Date;
    // 
    constructor(id?: string, name?: string, opportunities?: any) {
        this.id = id;
        this.name = name;
        this.opportunities = opportunities;
    }
}
export default interface IHttp{
 
    on(method : string, url: string, callback : any) : Promise<any>;
    listen(port: number) : Promise<void>;

}
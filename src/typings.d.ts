/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/* important for auth0 */
declare var require: any;
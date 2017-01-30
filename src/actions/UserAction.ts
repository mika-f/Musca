import { IAction } from "../models/IAction";
import { IRss } from "../models/IRss";
import { ActionTypes } from "./ActionTypes";

export interface registerFunc { (name: string, url: string): IAction; } // tslint:disable-line:interface-name class-name
export function register(name: string, url: string): IAction {
  return {
    rss: {
      name,
      url
    } as IRss,
    type: ActionTypes.REGISTER_NEW_SITE,
  } as IAction;
}

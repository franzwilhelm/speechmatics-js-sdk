/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Template
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AudioEventEndedEvent } from './audio-event-ended-event';

/**
 *
 * @export
 * @interface AudioEventEnded
 */
export interface AudioEventEnded {
  /**
   *
   * @type {string}
   * @memberof AudioEventEnded
   */
  message: AudioEventEndedMessageEnum;
  /**
   *
   * @type {AudioEventEndedEvent}
   * @memberof AudioEventEnded
   */
  event: AudioEventEndedEvent;
}

export const AudioEventEndedMessageEnum = {
  AudioEventEnded: 'AudioEventEnded',
} as const;

export type AudioEventEndedMessageEnum =
  (typeof AudioEventEndedMessageEnum)[keyof typeof AudioEventEndedMessageEnum];

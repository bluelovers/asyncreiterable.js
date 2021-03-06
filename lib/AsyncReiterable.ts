import {AsyncIterator} from "asynciterator";

/**
 * An append-only data collection that can be iterated asynchronously multiple times.
 */
export interface AsyncReiterable<T> {

  /**
   * @return {AsyncIterator<T>} An iterator that goes over all data elements in this collection asynchronously.
   *                            This iterator will end only when this collection has ended.
   */
  iterator(): AsyncIterator<T>;

  /**
   * Append new data into the collection.
   * If the data is `null`, then the collection will become ended.
   * @param {T} data A new data element, or `null` if the collection should be ended.
   */
  push(data: T | null): void;

  /**
   * @return {boolean} If this collection accepts to new data elements anymore.
   */
  isEnded(): boolean;

}

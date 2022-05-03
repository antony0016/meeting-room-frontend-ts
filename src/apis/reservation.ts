import { useReservationStore } from "@/store/reservation";
import { computed } from "vue";
import { CReservation } from "@/models/reservation";
import { usePlaceStore } from "@/store/place";

export type TIndexedReservations = {
  [key: number]: CReservation[];
};

export const ReservationFilter = (): any => {
  const store = useReservationStore();
  const place = usePlaceStore();
  // all reservation include date is expire
  const reservations = computed(() => store.reservations);

  // available means reserve date in after today.
  const availableReservations = computed(() => {
    const nowDate = new Date().toISOString().split("T")[0];
    return store.reservations.filter(
      (r) => new Date(r.use_date) >= new Date(nowDate) && !r.is_deleted
    );
  });
  // index by room id.
  const indexedReservations = computed(() => {
    const temp = {} as TIndexedReservations;
    const roomToLocationId = place.roomLocationIdMap;
    store.reservations.forEach((r) => {
      const roomId = r.room_id;
      if (!temp[roomToLocationId[roomId]]) {
        temp[roomToLocationId[roomId]] = Array<CReservation>();
      }
      temp[roomToLocationId[roomId]].push(r);
    });
    return temp;
  });

  return {
    availableReservations,
    indexedReservations,
    reservations: reservations,
  };
};

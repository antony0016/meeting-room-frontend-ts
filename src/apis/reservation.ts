import { useReservationStore } from "@/store/reservation";
import { computed } from "vue";
import { Reservation } from "@/models/reservation";
import { usePlaceStore } from "@/store/place";

export type TIndexedReservations = {
  [key: number]: Reservation[];
};

export const ReservationFilter = () => {
  const store = useReservationStore();
  const place = usePlaceStore();
  const availableReservations = computed(() => {
    const nowDate = new Date().toISOString().split("T")[0];
    return store.reservations.filter(
      (r) => new Date(r.use_date) >= new Date(nowDate)
    );
  });
  const indexedReservations = computed(() => {
    const temp = {} as TIndexedReservations;
    const roomToLocationId = place.locationMap;
    store.reservations.forEach((r) => {
      temp[roomToLocationId[r.id]].push(r);
    });
    return temp;
  });
  return { availableReservations, indexedReservations };
};

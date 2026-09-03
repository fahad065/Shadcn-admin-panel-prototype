export type BookingStatus = "Upcoming" | "Checked In" | "Checked Out" | "Cancelled";

export type RoomBooking = {
  bookingId: string;
  guest: string;
  email: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  amount: number;
  status: BookingStatus;
};

export const roomTypes = [
  "Single",
  "Double Queen",
  "Deluxe King",
  "Suite",
  "Executive Suite",
] as const;

export function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export const bookings: RoomBooking[] = [
  { bookingId: "BK-51023", guest: "Priya Anand", email: "priya.anand@meridianmail.com", roomType: "Suite", checkIn: "Sep 03, 2026", checkOut: "Sep 07, 2026", amount: 1240, status: "Checked In" },
  { bookingId: "BK-51024", guest: "Marcus Bellweather", email: "m.bellweather@harborline.com", roomType: "Double Queen", checkIn: "Sep 04, 2026", checkOut: "Sep 06, 2026", amount: 560, status: "Upcoming" },
  { bookingId: "BK-51025", guest: "Elena Kowalski", email: "elena.kowalski@brightfield.io", roomType: "Deluxe King", checkIn: "Sep 02, 2026", checkOut: "Sep 09, 2026", amount: 2100, status: "Checked In" },
  { bookingId: "BK-51026", guest: "Tomás Herrera", email: "tomas.herrera@calderonco.com", roomType: "Single", checkIn: "Sep 05, 2026", checkOut: "Sep 07, 2026", amount: 340, status: "Upcoming" },
  { bookingId: "BK-51027", guest: "Sofia Lindqvist", email: "sofia.lindqvist@nordicgrove.se", roomType: "Executive Suite", checkIn: "Aug 29, 2026", checkOut: "Sep 01, 2026", amount: 1890, status: "Checked Out" },
  { bookingId: "BK-51028", guest: "Damian Okoye", email: "damian.okoye@westfieldpartners.com", roomType: "Double Queen", checkIn: "Aug 28, 2026", checkOut: "Aug 31, 2026", amount: 780, status: "Checked Out" },
  { bookingId: "BK-51029", guest: "Harriet Vance", email: "harriet.vance@brookstonellp.com", roomType: "Single", checkIn: "Sep 06, 2026", checkOut: "Sep 08, 2026", amount: 310, status: "Cancelled" },
  { bookingId: "BK-51030", guest: "Kenji Watanabe", email: "kenji.watanabe@orionlabs.jp", roomType: "Deluxe King", checkIn: "Sep 04, 2026", checkOut: "Sep 10, 2026", amount: 2640, status: "Upcoming" },
  { bookingId: "BK-51031", guest: "Amara Osei", email: "amara.osei@brightfield.io", roomType: "Suite", checkIn: "Sep 01, 2026", checkOut: "Sep 06, 2026", amount: 1560, status: "Checked In" },
  { bookingId: "BK-51032", guest: "Lucas Ferreira", email: "lucas.ferreira@westfieldpartners.com", roomType: "Single", checkIn: "Aug 30, 2026", checkOut: "Aug 31, 2026", amount: 170, status: "Checked Out" },
  { bookingId: "BK-51033", guest: "Renata Silva", email: "renata.silva@calderonco.com", roomType: "Executive Suite", checkIn: "Sep 07, 2026", checkOut: "Sep 12, 2026", amount: 2975, status: "Upcoming" },
  { bookingId: "BK-51034", guest: "Owen Fitzgerald", email: "owen.fitzgerald@harborline.com", roomType: "Double Queen", checkIn: "Sep 03, 2026", checkOut: "Sep 05, 2026", amount: 520, status: "Checked In" },
  { bookingId: "BK-51035", guest: "Ingrid Solberg", email: "ingrid.solberg@nordicgrove.se", roomType: "Deluxe King", checkIn: "Sep 08, 2026", checkOut: "Sep 11, 2026", amount: 1320, status: "Upcoming" },
  { bookingId: "BK-51036", guest: "Malik Johnson", email: "malik.johnson@brookstonellp.com", roomType: "Suite", checkIn: "Aug 27, 2026", checkOut: "Aug 30, 2026", amount: 1140, status: "Cancelled" },
  { bookingId: "BK-51037", guest: "Yuki Tanaka", email: "yuki.tanaka@orionlabs.jp", roomType: "Single", checkIn: "Sep 02, 2026", checkOut: "Sep 04, 2026", amount: 290, status: "Checked Out" },
];

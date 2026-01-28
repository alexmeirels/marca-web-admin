import * as React from "react";
import dashboardSvg from "../../assets/icons/dashboard.svg?raw";
import calendarSvg from "../../assets/icons/calendar.svg?raw";
import lockSvg from "../../assets/icons/lock.svg?raw";
import plusSvg from "../../assets/icons/plus.svg?raw";
import clockSvg from "../../assets/icons/clock.svg?raw";
import ballsSvg from "../../assets/icons/balls.svg?raw";
import usersGroupSvg from "../../assets/icons/users-group.svg?raw";
import walletSvg from "../../assets/icons/wallet.svg?raw";
import chevronUp from "../../assets/icons/chevron-up.svg?raw";

import calendarDs from "../../assets/icons/calendar-ds.svg?raw";
import chevronLeftDs from "../../assets/icons/chevron-left-ds.svg?raw";
import chevronRightDs from "../../assets/icons/chevron-right-ds.svg?raw";

export type IconName =
  | "dashboard"
  | "calendar"
  | "lock"
  | "plus"
  | "clock"
  | "balls"
  | "usersGroup"
  | "wallet"
  | "chevronUp";

export type IconNameDs = "calendarDs" | "chevronLeftDs" | "chevronRightDs";
type IconProps = {
  name: IconName | IconNameDs;
  size?: number;
  fill?: string;
  stroke?: string;
};

const ICONS: Record<IconName | IconNameDs, string> = {
  dashboard: dashboardSvg,
  calendar: calendarSvg,
  lock: lockSvg,
  plus: plusSvg,
  clock: clockSvg,
  balls: ballsSvg,
  usersGroup: usersGroupSvg,
  wallet: walletSvg,
  chevronUp: chevronUp,
  calendarDs: calendarDs,
  chevronLeftDs: chevronLeftDs,
  chevronRightDs: chevronRightDs,
};

const stripSizeAttrs = (attrs: string) =>
  attrs.replace(/\s(width|height)="[^"]*"/g, "");

const transformSvg = (svg: string, addStroke: boolean) => {
  let output = svg.replace(/<svg\b([^>]*)>/i, (_match, attrs) => {
    return `<svg${stripSizeAttrs(attrs)} width="100%" height="100%">`;
  });

  output = output.replace(
    /\sfill="(?!none)[^"]*"/gi,
    ' fill="var(--icon-fill)"',
  );
  output = output.replace(/\sstroke="[^"]*"/gi, ' stroke="var(--icon-stroke)"');

  if (addStroke) {
    output = output.replace(
      /<path\b(?![^>]*\sstroke=)/gi,
      '<path stroke="var(--icon-stroke)"',
    );
  }

  return output;
};

export default function Icon({
  name,
  size = 20,
  fill = "currentColor",
  stroke,
}: IconProps) {
  const svg = React.useMemo(
    () => transformSvg(ICONS[name], Boolean(stroke)),
    [name, stroke],
  );

  const resolvedStroke = stroke ?? fill;
  const style: React.CSSProperties & Record<string, string | number> = {
    width: size,
    height: size,
    display: "inline-block",
    ["--icon-fill"]: fill,
    ["--icon-stroke"]: resolvedStroke,
  };

  return <span style={style} dangerouslySetInnerHTML={{ __html: svg }} />;
}

'use client';
import React, { useState } from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { type DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';
import { Text } from '@/components/ui/Text';
import { Calendar } from '@/components/ui/DatePicker/Calendar';
import Card from '@/components/ui/Card';

const CalendarPage = () => {
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 0),
    to: addDays(new Date(), 20),
  });

  return (
    <ComponentDocsPageTemplate
      title="Calendar"
      githubLink={
        'https://github.com/src/components/ui/Component.tsx
      }
      path="/calendar"
    >
      <div className="p-8 min-h-[750px] flex flex-row gap-12 items-center justify-center">
        <div className="flex flex-col gap-3">
          <Text variant="label" size="lg">
            Regular
          </Text>
          <Card>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <Text variant="label" size="lg">
            Date Range
          </Text>
          <Card>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
            />
          </Card>
        </div>
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default CalendarPage;

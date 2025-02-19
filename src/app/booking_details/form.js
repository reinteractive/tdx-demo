"use client"

import { Button, Form, Input, DatePicker, Select, Switch } from 'antd';
import "./page.scss";
import ChevronRight from '@assets/Icons/chevron_right.svg';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

const {RangePicker} = DatePicker

export default function BookingDetailsForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchPlace = searchParams.get('location');
  const labelCss = "text-[#929292] !pb-[6px]";
  const inputCss = "!bg-[#1E1E1E] !text-white !text-[17px] !border-0 !border-b !border-[#484848] !rounded-none focus:!shadow-none !p-0 !pb-[16px]";
  const customFormat = (value) => value.format("ddd, DD MMM");

  const onFinish = (values) => {
    router.push('/booking_confirmation')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <Form
      name="booking-details-form"
      layout='vertical'
      initialValues={{
        location: searchPlace || 'San Francisco',
        dates: [dayjs('2025/03/06'), dayjs('2025/03/06')],
        room_guest_and_pets: '1',
        special_rates: 'regular_rate',
        currency: 'usa',
        use_points: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={<h3 className={labelCss}>LOCATION</h3>}
        name="location"
      >
        <Input className={inputCss} />
      </Form.Item>

      <Form.Item
        label={<h3 className={labelCss}>DATES</h3>}
        name="dates"
      >
        <RangePicker
          format={customFormat}
          className={`${inputCss} w-full booking-date-range`}
          separator=""
          suffixIcon=""
        />
      </Form.Item>

      <Form.Item
        label={<h3 className={labelCss}>ROOMS, GUESTS AND PETS</h3>}
        name="room_guest_and_pets"
      >
        <Select
          placeholder="Room Guest and Pets"
          className="room-guest-and-pets"
          suffixIcon={
            <Image
              src={ChevronRight}
              width={7}
              height={13}
              style={{width: 'auto', height: 'auto'}}
              alt="chevron-right"
            />
          }
          options={[
            { value: '1', label: '1 Room, 1 Guest' }
          ]}
        />
      </Form.Item>

      <Form.Item
        label={<h3 className={labelCss}>SPECIAL RATES</h3>}
        name="special_rates"
      >
        <Select
          placeholder="Select special rates."
          className="special-rate-select"
          suffixIcon={
            <Image
              src={ChevronRight}
              width={7}
              height={13}
              style={{width: 'auto', height: 'auto'}}
              alt="chevron-right"
            />
          }
          options={[
            { value: 'regular_rate', label: 'Regular Rate' }
          ]}
        />
      </Form.Item>

      <Form.Item
        label={<h3 className={labelCss}>REINTERACTIVE HOTEL POINTS</h3>}
        name="use_points"
        valuePropName="checked"
      >
        <div className={`flex justify-between ${inputCss}`}>
          <div>USE POINTS</div>
          <Form.Item name="use_points" noStyle>
            <Switch />
          </Form.Item>
        </div>
      </Form.Item>

      <Form.Item
        label={<h3 className={labelCss}>CURRENCY</h3>}
        name="currency"
      >
        <Select
          placeholder="Currency"
          className="currency"
          suffixIcon={
            <Image
              src={ChevronRight}
              width={7}
              height={13}
              style={{width: 'auto', height: 'auto'}}
              alt="chevron-right"
            />
          }
          options={[
            { value: 'usa', label: 'USA' }
          ]}
        />
      </Form.Item>

      <Form.Item label={null} className='absolute bottom-0 left-0 w-full !mb-0'>
        <div className='bg-[#303030] pt-[24px] pb-[41px] px-[16px]'>
          <Button className='w-full !bg-white !text-black !py-[8px] !font-semibold !rounded-full' type="primary" htmlType="submit">
            Book Room
          </Button>
        </div>
      </Form.Item>
  </Form>
  )
}
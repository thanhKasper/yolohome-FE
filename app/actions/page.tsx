'use client'
import ActionList from '@/components/auto-action/ActionList'
import FilterSection from '@/components/filter/FilterSection'
import MySelect from '@/components/filter/MySelect'
import SearchBar from '@/components/filter/SearchBar'
import React, { useState } from 'react'

const AutoActionPage = () => {
    const [filterList, setFilterList] = useState<string[]>([])
  return (
    <>
      <FilterSection filterList={filterList} setFilterList={setFilterList}>
        <div className="flex items-center gap-1">
          <MySelect
            optList={["Thermometer", "Speedometer", "Odometer"]}
            setFilterList={setFilterList}
            placeholder="Sensor"
          />
          <MySelect
            optList={["Thermometer", "Speedometer", "Odometer"]}
            setFilterList={setFilterList}
            placeholder="Devices"
          />
          <SearchBar
            placeholder="Search devices or sensors"
            setFilterList={setFilterList}
          />
          <button
            className="flex items-center gap-1 hover:rounded-full hover:bg-slate-200 p-2 text-sm"
            onClick={() => setFilterList([])}
          >
            <img src="/filter/reset.png" alt="reset" className="w-4" />
            Reset
          </button>
          <button className="bg-my-primary active:bg-blue-600 text-white py-1 px-2 rounded-md text-sm ml-auto">
            Add New Action
          </button>
        </div>
      </FilterSection>
      <ActionList>
        
      </ActionList>
    </>
  );
}

export default AutoActionPage
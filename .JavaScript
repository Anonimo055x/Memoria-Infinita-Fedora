<VirtualBox xmlns="http://www.virtualbox.org/" version="1.17-windows">
  <Machine uuid="{aa012413-025c-4845-8dd9-bca165bf230b}" name="Fedora Infinita" OSType="Fedora_64" snapshotFolder="Snapshots" lastStateChange="2022-06-13T22:19:45Z">
    <MediaRegistry>
      <HardDisks>
        <HardDisk uuid="{4804561d-e11b-4d52-ad4c-edbb0b0e05a0}" location="Fedora Infinita.vdi" format="VDI" type="Normal"/>
        <HardDisk uuid="{d0918d67-3151-4127-bf8e-7aad46f9de53}" location="Fedora Infinita_1.vdi" format="VDI" type="Normal"/>
      </HardDisks>
      <DVDImages>
        <Image uuid="{9b89733b-3ec8-444a-8979-ecc3dac2d213}" location="D:/Fedora x64-disk002.iso"/>
        <Image uuid="{e4b8f671-6720-4ca1-b7e5-5c41355924b1}" location="D:/Fedora-Workstation-Live-x86_64-36-1.5.iso"/>
      </DVDImages>
    </MediaRegistry>
    <ExtraData>
      <ExtraDataItem name="GUI/LastCloseAction" value="PowerOff"/>
      <ExtraDataItem name="GUI/LastGuestSizeHint" value="1920,902"/>
      <ExtraDataItem name="GUI/LastNormalWindowPosition" value="0,17,960,487,max"/>
    </ExtraData>
    <Hardware>
      <CPU count="4">
        <PAE enabled="true"/>
        <NestedHWVirt enabled="true"/>
        <LongMode enabled="true"/>
        <X2APIC enabled="true"/>
        <HardwareVirtExLargePages enabled="true"/>
      </CPU>
      <Memory RAMSize="4024"/>
      <Firmware type="EFI"/>
      <HID Pointing="USBTablet"/>
      <Boot>
        <Order position="1" device="Floppy"/>
        <Order position="2" device="DVD"/>
        <Order position="3" device="HardDisk"/>
        <Order position="4" device="Network"/>
      </Boot>
      <Display controller="VMSVGA" VRAMSize="60"/>
      <VideoCapture screens="1" file="." fps="25"/>
      <BIOS>
        <IOAPIC enabled="true"/>
        <SmbiosUuidLittleEndian enabled="true"/>
      </BIOS>
      <USB>
        <Controllers>
          <Controller name="OHCI" type="OHCI"/>
        </Controllers>
      </USB>
      <Network>
        <Adapter slot="0" enabled="true" MACAddress="080027738A0C" type="82540EM">
          <NAT/>
        </Adapter>
      </Network>
      <AudioAdapter codec="AD1980" driver="DirectSound" enabled="true" enabledOut="true"/>
      <RTC localOrUTC="UTC"/>
      <Clipboard/>
      <GuestProperties>
        <GuestProperty name="/VirtualBox/GuestAdd/HostVerLastChecked" value="6.1.34" timestamp="1655153959635751000" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/Revision" value="149290" timestamp="1655153910279560004" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/Version" value="6.1.32" timestamp="1655153910279560002" flags=""/>
        <GuestProperty name="/VirtualBox/GuestAdd/VersionExt" value="6.1.32_Fedora" timestamp="1655153910279560003" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/MAC" value="080027738A0C" timestamp="1655153921137242401" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/Name" value="enp0s3" timestamp="1655153921137242403" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/Status" value="Up" timestamp="1655153921137242402" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/Broadcast" value="10.0.2.255" timestamp="1655153921136264701" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/IP" value="10.0.2.15" timestamp="1655153921136264700" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/0/V4/Netmask" value="255.255.255.0" timestamp="1655153921137242400" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/Net/Count" value="1" timestamp="1655158776721856800" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Product" value="Linux" timestamp="1655153910278583600" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Release" value="5.17.5-300.fc36.x86_64" timestamp="1655153910278583601" flags=""/>
        <GuestProperty name="/VirtualBox/GuestInfo/OS/Version" value="#1 SMP PREEMPT Thu Apr 28 15:51:30 UTC 2022" timestamp="1655153910279560000" flags=""/>
        <GuestProperty name="/VirtualBox/HostInfo/GUI/LanguageID" value="en_US" timestamp="1655158786831270100" flags=""/>
      </GuestProperties>
      <StorageControllers>
        <StorageController name="IDE" type="PIIX4" PortCount="2" useHostIOCache="true" Bootable="true">
          <AttachedDevice passthrough="false" type="DVD" hotpluggable="false" port="1" device="0">
            <Image uuid="{e4b8f671-6720-4ca1-b7e5-5c41355924b1}"/>
          </AttachedDevice>
        </StorageController>
        <StorageController name="SATA" type="AHCI" PortCount="2" useHostIOCache="false" Bootable="true" IDE0MasterEmulationPort="0" IDE0SlaveEmulationPort="1" IDE1MasterEmulationPort="2" IDE1SlaveEmulationPort="3">
          <AttachedDevice type="HardDisk" hotpluggable="false" port="0" device="0">
            <Image uuid="{4804561d-e11b-4d52-ad4c-edbb0b0e05a0}"/>
          </AttachedDevice>
          <AttachedDevice type="HardDisk" hotpluggable="false" port="1" device="0">
            <Image uuid="{d0918d67-3151-4127-bf8e-7aad46f9de53}"/>
          </AttachedDevice>
        </StorageController>
      </StorageControllers>
    </Hardware>
  </Machine>
</VirtualBox>

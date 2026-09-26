import Link from "next/link";
import { notFound } from "next/navigation";

const homelabData = {
  overview: {
    title: "Overview",
    description:
      "A five-node, segmented home infrastructure environment designed to mirror many of the architectural patterns used in enterprise technology environments.",
    sections: [
      {
        title: "Architecture",
        content: [
          "The lab is built around a five-node Proxmox cluster consisting of three Minisforum MS-01 systems and two Beelink EQ14 nodes.",
          "Compute, networking, storage, security, automation, and application services are intentionally separated into logical layers rather than operating as a collection of standalone devices.",
          "The environment is designed to provide a platform for virtualization, containerized workloads, infrastructure experimentation, DevOps, automation, security testing, and AI-driven operations.",
        ],
      },
      {
        title: "Network Design",
        content: [
          "The network is built around a redundant pair of UniFi Dream Machine Pro gateways configured in an active/passive failover model.",
          "A managed UniFi switching environment and a 10GbE SFP+ backbone provide connectivity between core infrastructure, compute nodes, storage, wireless access points, cameras, IoT devices, and trusted endpoints.",
          "Multiple VLANs segment infrastructure, trusted devices, IoT systems, VPN traffic, security cameras, guest devices, homelab workloads, DMZ services, and backup infrastructure.",
          "Inter-VLAN communication is controlled through firewall policy rather than being implicitly allowed.",
        ],
      },
      {
        title: "Compute Platform",
        content: [
          "Virtualization is provided by a five-host Proxmox environment.",
          "Three Minisforum MS-01 systems provide the primary compute capacity, while two Beelink EQ14 nodes provide additional lightweight compute resources.",
          "Virtual machines and containers host core network services, identity platforms, media applications, automation systems, databases, monitoring platforms, and development workloads.",
        ],
      },
      {
        title: "Storage",
        content: [
          "Centralized storage is provided by a Ubiquiti UNAS Pro populated with six drives providing approximately 40 TB of usable capacity after RAID 5.",
          "The storage platform supports shared application data, media, backups, virtual machine workloads, snapshots, and other infrastructure services.",
          "NFS and SMB provide network-based access while allowing storage to remain independent from individual compute nodes.",
        ],
      },
      {
        title: "Core Services",
        content: [
          "The environment hosts a broad collection of self-hosted services including Authentik, Vaultwarden, AdGuard, Unbound, Traefik, WireGuard, Home Assistant, Zigbee2MQTT, Mosquitto, Plex, Jellyfin, Sonarr, Radarr, Redis, PostgreSQL, Portainer, and other supporting platforms.",
          "These services provide identity, networking, automation, media, data, remote access, security, and application capabilities.",
        ],
      },
      {
        title: "Security & Segmentation",
        content: [
          "Security is built into the architecture through VLAN segmentation, firewall policy, IDS/IPS capabilities, DNS filtering, isolated IoT and camera networks, controlled remote access, and separate DMZ and backup network segments.",
          "The goal is to treat the environment as a small enterprise network rather than a single trusted home LAN.",
        ],
      },
      {
        title: "Automation & AI",
        content: [
          "The lab also serves as a development environment for automation and AI.",
          "Current and planned work includes GitHub-based CI/CD, n8n workflows, infrastructure automation, AI agents, network monitoring, automated documentation, and eventually controlled AI-assisted infrastructure operations.",
        ],
      },
    ],
  },

  network: {
    title: "Network",
    description:
      "A segmented, redundant, high-speed network architecture built around UniFi, 10GbE SFP+ connectivity, controlled trust zones, centralized DNS, secure remote access, and protected application delivery.",
    sections: [
      {
        title: "Network Architecture",
        content: [
          "The home lab network was designed around enterprise networking principles rather than a traditional flat residential LAN.",
          "The architecture emphasizes redundancy, segmentation, centralized management, high-speed east-west connectivity, controlled inter-VLAN access, and secure remote connectivity.",
          "Internet connectivity enters through AT&T Fiber and the BGW320 gateway. Behind the provider edge sits a redundant pair of UniFi Dream Machine Pro gateways configured in an active/passive failover design.",
          "The active UDM Pro provides primary routing, firewall enforcement, VLAN management, VPN services, IDS/IPS, and internet gateway functionality. The secondary UDM Pro serves as the standby gateway, reducing the risk of the network edge becoming a single point of failure.",
          "From the gateway layer, the network transitions into a managed UniFi switching environment connected through a 10GbE SFP+ backbone.",
          "The objective was not simply to provide internet connectivity throughout the house. The network was intentionally designed to operate more like a small enterprise infrastructure environment, where workloads are segmented by role and trust level and communication between those zones is explicitly controlled.",
        ],
      },
      {
        title: "High Availability & Gateway Redundancy",
        content: [
          "Two UniFi Dream Machine Pro gateways are used instead of relying on a single edge appliance.",
          "One UDM Pro operates as the active gateway while the secondary device provides passive failover capability.",
          "This reduces the gateway layer as a single point of failure for internet access, routing, inter-VLAN communication, firewall enforcement, VPN services, and IDS/IPS.",
          "The design also provides practical experience with active/passive architecture, gateway failover, failure-domain reduction, and infrastructure resilience.",
        ],
      },
      {
        title: "AT&T Fiber & Internet Edge",
        content: [
          "The ISP edge is provided by AT&T Fiber through the BGW320 gateway.",
          "The BGW320 remains part of the AT&T service architecture, but it is not intended to function as the primary network controller.",
          "The internal architecture places routing, VLAN management, firewall policy, VPN access, and security enforcement within the UniFi gateway layer.",
          "The design avoids unnecessary duplication of routing and NAT responsibilities while maintaining compatibility with the AT&T service architecture.",
        ],
      },
      {
        title: "10GbE SFP+ Backbone",
        content: [
          "The core infrastructure backbone is designed around 10 Gigabit Ethernet using SFP+ connectivity.",
          "This supports high-bandwidth east-west traffic between compute, switching, storage, and other infrastructure systems.",
          "Workloads such as virtual machine traffic, storage access, backups, media processing, application communication, and large file transfers can generate substantially more internal traffic than typical residential systems.",
          "The primary benefit of 10GbE is therefore not internet speed. It is removing bottlenecks between internal infrastructure components.",
        ],
      },
      {
        title: "Managed UniFi Switching",
        content: [
          "Managed UniFi switching forms the distribution layer beneath the gateway pair.",
          "The switching environment supports VLAN trunking, tagged traffic, access-port assignment, PoE connectivity, server connectivity, wireless access points, cameras, storage, infrastructure devices, and client systems.",
          "Managed switching allows many logically isolated networks to share the same physical switching infrastructure.",
        ],
      },
      {
        title: "Why UniFi",
        content: [
          "UniFi was selected because it provides a strong balance between enterprise-style networking capabilities and practical administration for a home lab.",
          "Routing, switching, wireless, VLANs, firewall policy, IDS/IPS, VPN connectivity, cameras, client visibility, and topology can be managed through a common ecosystem.",
          "Traditional enterprise platforms can provide deeper capabilities, but often introduce substantially greater cost, licensing requirements, administrative overhead, and operational complexity.",
          "The objective was to implement enterprise networking concepts without turning network administration itself into the entire purpose of the lab.",
        ],
      },
      {
        title: "VLAN Architecture",
        content: [
          "The network is segmented according to device function, workload type, and trust level.",
          "VLAN 10 is dedicated to Infrastructure.",
          "VLAN 20 contains Trusted endpoints.",
          "VLAN 30 contains IoT devices.",
          "VLAN 40 is dedicated to VPN clients.",
          "VLAN 50 isolates Security Cameras.",
          "VLAN 60 provides Guest connectivity.",
          "VLAN 70 contains Homelab workloads.",
          "VLAN 80 provides the DMZ.",
          "VLAN 90 is dedicated to Backup Homelab infrastructure.",
          "The segmentation model allows network policy to be based on what a system is and what it needs rather than simply trusting every internally connected device.",
        ],
      },
      {
        title: "Firewall & Inter-VLAN Security",
        content: [
          "Firewall policy controls communication not only between the internet and the environment, but also between internal trust zones.",
          "Traffic between IoT, Infrastructure, Guest, Trusted, Camera, VPN, Homelab, DMZ, and Backup networks is not assumed to be trusted.",
          "The long-term model follows a simplified least-privilege approach: systems should be allowed to communicate with the services they require while unnecessary communication remains blocked.",
        ],
      },
      {
        title: "DNS Architecture",
        content: [
          "DNS is provided through AdGuard Home and Unbound rather than relying solely on the network gateway or an external resolver.",
          "AdGuard Home provides DNS filtering, client visibility, local naming, DNS rewrites, and policy capabilities.",
          "Unbound provides recursive DNS resolution.",
          "This separates DNS policy from DNS resolution and provides greater control over internal application naming.",
        ],
      },
      {
        title: "WireGuard Remote Access",
        content: [
          "WireGuard provides the secure remote-access path into the home lab when connectivity is required from outside the local network.",
          "The VPN is intentionally designed so that a remotely connected device does not become equivalent to a device physically attached to the Trusted LAN.",
          "Every WireGuard client is placed into VLAN 40, which is dedicated specifically to VPN traffic.",
          "This keeps remotely connected systems logically separated from the Trusted, Infrastructure, IoT, Homelab, Security Camera, Guest, DMZ, and Backup networks.",
          "The UniFi firewall layer then determines what a VPN client is allowed to access after the encrypted tunnel has been established.",
          "WireGuard therefore handles secure entry into the environment while VLAN segmentation and firewall policy govern movement after entry.",
          "A VPN client may be allowed to reach selected applications or management services without receiving unrestricted lateral access throughout the environment.",
          "This also provides a containment boundary if a remote endpoint becomes lost, compromised, or otherwise untrusted.",
          "WireGuard was originally tested within an unprivileged LXC container, but networking and kernel capability restrictions made that deployment model unnecessarily difficult.",
          "Rather than weakening the container security model, WireGuard was moved to a dedicated Debian virtual machine.",
          "The VM consumes slightly more resources but provides cleaner isolation, predictable networking behavior, and easier troubleshooting.",
          "The experience reinforced an important design principle: the deployment option with the lowest resource consumption is not automatically the best operational design.",
        ],
      },
      {
        title: "Traefik & Application Routing",
        content: [
          "As the number of self-hosted applications increased, accessing services through raw IP addresses and port numbers became difficult to manage.",
          "Traefik was introduced as the reverse-proxy and application-routing layer.",
          "Applications can be presented through consistent internal DNS names while Traefik routes requests to workloads running across different hosts and network segments.",
          "This separates internal application ports from user-facing service endpoints and creates a cleaner service-delivery model.",
        ],
      },
      {
        title: "SSL / TLS & Certificate Management",
        content: [
          "SSL/TLS is used to protect web-based access to internal applications and to avoid relying on unencrypted HTTP for services that handle credentials, administrative access, or sensitive application data.",
          "Traefik acts as the reverse-proxy layer and provides a natural point for TLS termination. Users connect to a service over HTTPS, Traefik presents the appropriate certificate, and then routes the request to the correct internal application.",
          "This allows internal applications to be accessed through stable DNS names and standard HTTPS endpoints rather than through raw IP addresses and nonstandard ports.",
          "Certificate management is treated as part of application delivery rather than as an application-by-application afterthought. The goal is to centralize certificate handling where practical so that services can use a consistent and repeatable HTTPS model.",
          "Internal DNS, Traefik routing, firewall policy, and TLS configuration must all agree for a service to work correctly. A valid certificate alone does not solve routing or access-control problems, and a correctly routed service should still not be exposed without appropriate encryption where sensitive traffic is involved.",
          "The architecture also separates public documentation from operational certificate details. Private keys, certificate secrets, API credentials, and other sensitive material are never stored in public repositories.",
          "The broader design goal is to make HTTPS the normal access pattern for internal web applications while keeping certificate renewal and management as automated and centralized as practical.",
        ],
      },
      {
        title: "Challenges & Lessons Learned",
        content: [
          "Building the network involved significantly more than purchasing network equipment and defining VLANs.",
          "Challenges included integrating the AT&T gateway, avoiding unnecessary double NAT, implementing gateway redundancy, building the 10GbE backbone, creating firewall boundaries without breaking application traffic, managing DNS across segmented networks, deploying WireGuard, configuring reverse-proxy routing, and introducing TLS across internal web services.",
          "The continuing challenge is balancing usability with security while resisting the temptation to solve application problems by simply removing network restrictions.",
        ],
      },
    ],
  },

  compute: {
    title: "Compute",
    description:
      "A five-node Proxmox virtualization platform designed to provide flexible, distributed compute capacity for infrastructure, application, development, automation, and experimentation workloads.",
    sections: [
      {
        title: "Compute Architecture",
        content: [
          "The compute layer is built around a five-node Proxmox cluster consisting of three Minisforum MS-01 systems and two Beelink EQ14 nodes.",
          "The goal was to create a flexible virtualization platform capable of supporting infrastructure services, application workloads, containers, development environments, automation, monitoring, media services, databases, and future AI workloads without tying individual applications directly to physical hardware.",
          "Rather than dedicating one physical machine to one application, Proxmox provides a common compute layer where workloads can be created, rebuilt, isolated, moved, backed up, and managed independently from the underlying hardware.",
          "This changes the role of the physical servers. Instead of each machine being identified with a specific application, the servers collectively provide compute capacity to the environment.",
        ],
      },
      {
        title: "Why Proxmox",
        content: [
          "Proxmox VE was selected as the virtualization platform because it provides virtual machines, Linux containers, clustering, storage integration, virtual networking, backup capabilities, and centralized management within one platform.",
          "For a home lab, this provides a strong balance between enterprise-style virtualization functionality and accessibility.",
          "Proxmox supports both KVM-based virtual machines and Linux LXC containers, allowing the deployment model to be selected according to the workload rather than forcing every service into the same architecture.",
          "The platform also integrates naturally with the Linux-heavy, open-source, Docker-based, and automation-focused direction of the environment.",
        ],
      },
      {
        title: "Why Not Standalone Docker Hosts",
        content: [
          "A simpler architecture could have used several standalone Linux servers running Docker directly.",
          "That would have worked for many application workloads, but it would have tightly coupled those applications to individual physical systems.",
          "Proxmox introduces an infrastructure abstraction layer between hardware and applications.",
          "Docker still plays an important role in the environment, but Docker and Proxmox solve different problems: Proxmox provides the compute virtualization layer, while Docker provides the application container layer.",
        ],
      },
      {
        title: "Why Not VMware or Hyper-V",
        content: [
          "VMware would have been a natural enterprise virtualization option given its long history in large corporate environments.",
          "However, licensing and product changes within the VMware ecosystem made it less attractive for a personally funded home lab where experimentation and long-term flexibility were priorities.",
          "Microsoft Hyper-V could also support many of the workloads, but much of the lab is centered around Linux, Docker, open-source infrastructure, automation tools, and containerized services.",
          "Proxmox therefore aligned more naturally with the overall architecture.",
        ],
      },
      {
        title: "Five-Node Cluster Design",
        content: [
          "The environment uses five Proxmox nodes rather than one large virtualization server.",
          "A single powerful server would be simpler to operate but would also concentrate nearly every workload into one physical failure domain.",
          "The multi-node architecture allows workloads to be distributed across physical systems and provides greater flexibility during maintenance, upgrades, hardware changes, and troubleshooting.",
          "The cluster also provides hands-on experience with distributed infrastructure concepts such as cluster membership, node communication, quorum, resource placement, storage dependencies, and failure domains.",
          "The current cluster architecture should not be confused with automatic workload high availability. Proxmox HA is planned as a future project and will be implemented only after the storage, workload, and recovery requirements are designed and tested.",
        ],
      },
      {
        title: "Minisforum MS-01 Primary Compute Tier",
        content: [
          "Three Minisforum MS-01 systems form the primary compute tier of the environment.",
          "The MS-01 platform provides significantly more capability than a typical mini PC while retaining a compact physical footprint and reasonable power requirements.",
          "These systems are used for workloads that benefit from greater compute resources, higher network performance, or more demanding virtualization requirements.",
          "The MS-01 platform also fits particularly well with the 10GbE network architecture, allowing compute workloads to communicate with storage and other infrastructure systems without being limited to a 1Gbps backbone.",
        ],
      },
      {
        title: "Beelink EQ14 Secondary Compute Tier",
        content: [
          "Two Beelink EQ14 systems provide a secondary lightweight compute tier.",
          "Utility services, supporting applications, test environments, lightweight containers, and smaller workloads can run efficiently on lower-power compute nodes.",
          "This creates a tiered architecture in which workloads are placed according to actual resource requirements rather than automatically using the most powerful hardware available.",
        ],
      },
      {
        title: "Virtual Machines vs LXC Containers",
        content: [
          "One of the most useful capabilities within Proxmox is the ability to choose between full virtual machines and Linux containers.",
          "LXC containers provide low resource overhead, fast startup, efficient memory utilization, and strong suitability for lightweight Linux services.",
          "Virtual machines provide a stronger abstraction boundary with an independent operating-system environment and greater flexibility for workloads requiring specialized networking, kernel behavior, operating-system control, or stronger isolation.",
          "The virtualization model is selected according to the requirements of the workload.",
        ],
      },
      {
        title: "Docker Architecture",
        content: [
          "Docker is used extensively throughout the environment but operates at a different layer from Proxmox.",
          "Proxmox manages physical compute resources, virtual machines, Linux containers, host lifecycle, networking, and virtualization boundaries.",
          "Docker manages application containers, application dependencies, service composition, and application lifecycle.",
          "A common deployment model therefore consists of a physical Proxmox node hosting a Linux virtual machine, which then runs Docker and one or more application containers.",
        ],
      },
      {
        title: "Compute Networking",
        content: [
          "The Proxmox environment participates directly in the larger segmented network architecture rather than operating as an isolated virtualization island.",
          "Workloads can be assigned to different logical network segments according to their role and security requirements.",
          "The 10GbE SFP+ backbone is particularly valuable for virtualization because compute environments generate significant east-west traffic between hosts, storage, applications, and supporting services.",
        ],
      },
      {
        title: "Shared Storage Integration",
        content: [
          "The Proxmox environment integrates with centralized storage provided by the Ubiquiti UNAS Pro.",
          "Shared network storage allows important workload data to remain independent from individual physical compute nodes.",
          "NFS is used to provide shared storage to virtualization workloads.",
          "The architecture separates compute, network, and storage into distinct infrastructure layers that can evolve independently.",
        ],
      },
      {
        title: "Workload Placement",
        content: [
          "As the environment has grown, workload placement has become an increasingly intentional decision.",
          "Placement can consider CPU requirements, memory consumption, storage dependencies, network requirements, workload intensity, security classification, kernel requirements, dependency relationships, and maintenance impact.",
          "The objective is to place workloads according to their operational characteristics rather than whichever server happens to have available capacity at the moment.",
        ],
      },
      {
        title: "Cluster Quorum",
        content: [
          "Operating a multi-node Proxmox cluster introduces the concept of quorum.",
          "Cluster members need to determine whether enough nodes remain available to make safe decisions about cluster state.",
          "Using five nodes provides an odd-numbered membership model that supports majority-based decision making more cleanly than a cluster that can divide evenly.",
        ],
      },
      {
        title: "Filesystem Capacity & Plex",
        content: [
          "The Plex environment provided a practical example of an application issue that was ultimately caused by infrastructure capacity.",
          "The Plex virtual machine filesystem reached 100% utilization.",
          "The virtual disk was expanded, filesystem capacity was increased, and Plex storage usage was reviewed.",
          "This reinforced the importance of monitoring infrastructure resources independently from application availability.",
        ],
      },
      {
        title: "Persistent Storage Mounts",
        content: [
          "Network-mounted storage introduced the requirement for reliable persistent filesystem configuration.",
          "A mount functioning correctly during a manual test is not sufficient if applications depend on that storage following a reboot.",
          "Persistent mount configuration therefore became part of the operational design.",
        ],
      },
      {
        title: "Compute Design Philosophy",
        content: [
          "The central design principle is that physical hardware should be treated as compute capacity rather than as the application itself.",
          "Instead of thinking in terms of a Plex computer, Home Assistant computer, or DNS computer, the environment is designed around a shared compute platform hosting virtualized workloads.",
          "As the environment matures, workloads should increasingly be defined by their requirements, dependencies, security classification, and availability needs rather than by a permanent attachment to specific hardware.",
        ],
      },
    ],
  },

  storage: {
    title: "Storage",
    description:
      "A dedicated UNAS Pro storage layer with six drives providing approximately 40 TB of usable capacity after RAID 5, shared NFS/SMB access, and separation from the compute platform.",
    sections: [
      {
        title: "Storage Architecture",
        content: [
          "The storage layer is centered around a Ubiquiti UNAS Pro, which provides centralized network-attached storage for the home lab.",
          "The goal was to avoid tightly coupling important application data to individual Proxmox hosts.",
          "Instead of every compute node owning all of its own data locally, storage is treated as a separate infrastructure layer connected to the compute environment through the network.",
          "This creates a cleaner separation between compute, networking, storage, and applications and makes the environment easier to maintain and evolve.",
        ],
      },
      {
        title: "Physical Storage & RAID",
        content: [
          "The UNAS Pro is populated with six physical drives providing approximately 40 TB of usable storage capacity after RAID 5.",
          "The disks are configured in RAID 5, which stripes data across the drives while maintaining distributed parity.",
          "The RAID 5 design allows the array to tolerate the failure of a single drive without immediately losing the entire storage pool.",
          "The choice balances usable capacity, redundancy, and cost more effectively for this environment than mirroring every disk.",
          "RAID 5 is not treated as a backup strategy. RAID protects primarily against a single physical disk failure; it does not protect against accidental deletion, corruption, ransomware, administrative mistakes, catastrophic NAS failure, fire, theft, or other site-level events.",
          "Backup therefore remains a separate architectural concern from disk redundancy.",
        ],
      },
      {
        title: "Why Centralized Storage",
        content: [
          "A simpler design would store everything directly on the local disks inside each Proxmox node.",
          "That approach works, but it creates a strong dependency between a workload and the physical host where its data resides.",
          "Centralized storage reduces that dependency by allowing application data, media, shared files, and selected virtualization workloads to remain independent from the lifecycle of a particular compute node.",
          "This provides more flexibility for maintenance, host replacement, workload migration, backup, and recovery.",
        ],
      },
      {
        title: "Why UNAS Pro",
        content: [
          "The UNAS Pro was selected because it fits naturally into the existing UniFi-based infrastructure while providing dedicated storage independent from the Proxmox compute cluster.",
          "It provides a purpose-built storage platform rather than forcing one of the Proxmox nodes to perform double duty as both compute and storage.",
          "The storage system's primary responsibility is to provide reliable shared storage to the rest of the environment rather than becoming another general-purpose application host.",
          "The seven-bay platform also leaves room for future storage expansion beyond the six drives currently installed.",
        ],
      },
      {
        title: "Why Not Use Proxmox as the NAS",
        content: [
          "It would have been possible to install additional disks inside a compute server and expose that storage through NFS or SMB.",
          "That would reduce hardware cost, but it would also combine virtualization and storage responsibilities inside one physical failure domain.",
          "A single host could then be responsible for running virtual machines, containers, shared storage, application data, and potentially backups.",
          "Separating storage from compute reduces that concentration of responsibilities and gives storage its own lifecycle, monitoring, capacity-planning, and maintenance model.",
        ],
      },
      {
        title: "Why Not Synology or QNAP",
        content: [
          "Synology and QNAP would both have been valid alternatives and provide mature NAS platforms with strong ecosystems and broad protocol support.",
          "The UNAS Pro fit this environment because the network was already heavily based around UniFi and the requirement was focused storage rather than another application-hosting platform.",
          "The decision was based on architectural fit rather than a claim that the UNAS Pro is universally superior to those platforms.",
        ],
      },
      {
        title: "10GbE Storage Connectivity",
        content: [
          "Shared storage can generate significant internal network traffic, particularly when virtual machines, backups, media workloads, and multiple applications access the storage platform simultaneously.",
          "The 10GbE infrastructure backbone helps prevent the network from becoming the primary bottleneck between compute and storage.",
          "This becomes especially important for virtual-machine workloads, large file transfers, backup and restore operations, and other high-volume east-west traffic.",
          "The goal is not simply higher peak throughput, but a storage path with enough capacity to support multiple infrastructure workloads concurrently.",
        ],
      },
      {
        title: "NFS",
        content: [
          "NFS is used where Linux and virtualization workloads require shared storage.",
          "It integrates naturally with Proxmox and Linux-based systems and allows remote storage to be mounted and consumed much like a local filesystem.",
          "NFS supports virtual-machine related storage, application data, media, backups, shared Linux files, and other infrastructure requirements.",
          "Its primary architectural benefit is that the data does not have to remain permanently attached to a specific compute node.",
        ],
      },
      {
        title: "SMB",
        content: [
          "SMB is used where broader workstation and file-sharing compatibility is required.",
          "It provides convenient access from macOS and Windows systems and is useful for shared documents, media management, general file access, and other user-facing storage requirements.",
          "Using both NFS and SMB allows the storage platform to support different access patterns without requiring every workload to use the same protocol.",
        ],
      },
      {
        title: "Shared VM Storage",
        content: [
          "Shared storage provides Proxmox with access to data that does not live solely on a single compute node.",
          "This becomes increasingly important as the cluster matures because it supports more flexible maintenance, centralized backup, workload movement, and future high-availability designs.",
          "Shared storage is one of the foundational dependencies that must be considered before Proxmox HA can be treated as a reliable recovery mechanism.",
        ],
      },
      {
        title: "Application Storage",
        content: [
          "Many self-hosted applications require persistent data even when the application container or virtual machine itself can be rebuilt quickly.",
          "This creates an important distinction between replaceable application runtime and critical application data.",
          "The storage architecture therefore focuses on preserving the data and state that services depend on rather than assuming the VM or container instance itself is the most important asset.",
        ],
      },
      {
        title: "Media Storage",
        content: [
          "Plex and Jellyfin benefit significantly from centralized media storage.",
          "Media files remain independent from the virtual machines or containers running the applications.",
          "The media library can therefore survive VM replacement, application upgrades, host migration, or compute-node failure without requiring the media collection to move with the application server.",
          "Centralized media storage also allows multiple services to consume the same underlying content where appropriate.",
        ],
      },
      {
        title: "Backup Storage",
        content: [
          "Backups are another major responsibility of the storage platform, but backup data is treated differently from ordinary production application data.",
          "The goal is to increasingly separate production workloads from the systems and repositories used to recover them.",
          "A production workload should not automatically have unrestricted ability to delete, alter, or encrypt all of its own recovery points.",
          "This is why backup architecture is treated as both a storage problem and a security problem.",
        ],
      },
      {
        title: "Backup VLAN Integration",
        content: [
          "Backup infrastructure is assigned its own logical network segment through the Backup Homelab VLAN.",
          "This creates a foundation for restricting which systems can communicate with backup resources and how those resources can be accessed.",
          "Over time, the design can support tighter write permissions, separate credentials, controlled restore workflows, reduced lateral movement, and stronger ransomware-resilience controls.",
        ],
      },
      {
        title: "Persistent Mounts",
        content: [
          "One practical lesson was the importance of persistent network mounts.",
          "A storage share that works when mounted manually is not sufficient if applications depend on that storage after a reboot, service restart, or host maintenance event.",
          "Persistent mount configuration therefore became part of the infrastructure design so that workloads can reliably regain access to their dependencies without manual intervention.",
          "This reinforced a broader principle: a dependency that works only when manually restored is not yet automated infrastructure.",
        ],
      },
      {
        title: "Plex Capacity Issue",
        content: [
          "The Plex environment provided a useful example of how storage and compute problems can appear as application problems.",
          "The Plex virtual machine filesystem reached 100% utilization.",
          "The application was still present, but the underlying filesystem no longer had sufficient free capacity for normal operation.",
          "The virtual disk was expanded, the filesystem was extended, and Plex data consumption was reviewed.",
          "This reinforced the importance of monitoring storage utilization independently from application availability.",
        ],
      },
      {
        title: "Capacity Planning",
        content: [
          "Storage requires continuous capacity planning because data tends to grow rather than remain static.",
          "The environment must account for media growth, virtual-machine data, application data, backups, snapshots, logs, database growth, and future projects.",
          "The important question is therefore not only how much free space exists today, but how quickly capacity is being consumed and when expansion will be required.",
          "This is an area where storage, monitoring, and observability increasingly intersect.",
        ],
      },
      {
        title: "Performance vs Capacity",
        content: [
          "Storage design has to balance capacity and performance because different workloads have very different I/O characteristics.",
          "Media storage may prioritize large amounts of capacity, virtual-machine storage may be more sensitive to latency and I/O performance, and backup storage may prioritize durability and retention.",
          "As the environment grows, these differing requirements may justify multiple storage tiers instead of treating every workload as though it needs the same type of storage.",
        ],
      },
      {
        title: "Storage Security",
        content: [
          "Storage contains some of the most valuable data in the environment, so access is intentionally controlled.",
          "Guest and IoT networks should not have unrestricted access to storage, management interfaces remain private, and externally exposed workloads should not automatically gain broad storage privileges.",
          "The long-term model is based on limiting which VLANs, hosts, users, and services can reach specific storage resources.",
          "Being connected to the network should never automatically imply access to shared storage.",
        ],
      },
      {
        title: "Storage & High Availability",
        content: [
          "Storage will become increasingly important as the planned Proxmox High Availability project is implemented.",
          "Automatically restarting a virtual machine on another node provides little value if the surviving node cannot reach the workload's storage, network shares, databases, or other persistent dependencies.",
          "High availability is therefore not purely a compute problem. It depends on compute, network, storage, and application dependencies all remaining available.",
          "Future HA testing will need to confirm not only that a workload restarts, but that its storage dependencies return correctly and the service becomes operational without manual intervention.",
        ],
      },
      {
        title: "Current Limitations",
        content: [
          "The current storage environment is suitable for the existing lab, but it is not treated as the final architecture.",
          "Future areas of improvement include stronger backup isolation, formal retention policies, off-site backup, restore testing, expanded storage monitoring, performance baselines, capacity forecasting, and potentially separate storage tiers.",
          "The goal is to continue maturing the platform around recovery and operational resilience rather than simply adding more raw capacity.",
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "The storage platform has reinforced that data should not be unnecessarily tied to compute hardware.",
          "Shared storage increases flexibility but also introduces new dependencies on networking, mount configuration, permissions, and storage availability.",
          "Storage performance and storage capacity are separate design concerns.",
          "RAID provides disk-failure protection but does not replace backup.",
          "Persistent mounts must survive reboots and maintenance.",
          "Application failures can actually be storage or filesystem failures.",
          "Backup infrastructure requires its own security model.",
          "Network performance directly affects shared-storage performance.",
          "High availability depends on storage availability just as much as it depends on multiple compute nodes.",
        ],
      },
    ],
  },

  applications: {
    title: "Applications",
    description:
      "Self-hosted platforms and services running throughout the environment.",
    sections: [
      {
        title: "Plex / Jellyfin",
        content: ["Media platforms provide centralized streaming and media-library management."],
      },
      {
        title: "Home Assistant",
        content: ["Home Assistant serves as the primary smart-home automation and device-management platform."],
      },
      {
        title: "Authentik",
        content: ["Authentik provides centralized identity and authentication services for supported applications."],
      },
      {
        title: "Traefik",
        content: ["Traefik provides reverse-proxy and application-routing services across the environment."],
      },
      {
        title: "Vaultwarden",
        content: ["Vaultwarden provides self-hosted credential and password-management capabilities."],
      },
      {
        title: "AdGuard",
        content: ["AdGuard Home provides DNS filtering, local DNS functionality, and client visibility while Unbound provides recursive resolution."],
      },
    ],
  },

  monitoring: {
    title: "Monitoring",
    description:
      "Infrastructure health, availability, performance metrics, alerting, and operational status across the environment.",
    sections: [
      {
        title: "Infrastructure Monitoring",
        content: ["Monitoring covers compute, storage, networking, and application availability across the home lab."],
      },
      {
        title: "Performance Metrics",
        content: ["CPU, memory, storage, network utilization, and service performance provide insight into the health of the environment."],
      },
      {
        title: "Alerting",
        content: ["Alerts are intended to identify outages, failures, abnormal resource consumption, and other operational conditions requiring attention."],
      },
    ],
  },

  observability: {
    title: "Observability",
    description:
      "Deeper operational insight through metrics, logs, dashboards, telemetry, and event correlation.",
    sections: [
      {
        title: "Dashboards",
        content: ["Centralized dashboards provide visibility into infrastructure and application behavior."],
      },
      {
        title: "Logging",
        content: ["Centralized logging provides a foundation for troubleshooting application and infrastructure behavior across multiple systems."],
      },
      {
        title: "Telemetry",
        content: ["Operational telemetry allows system behavior and performance to be examined over time rather than relying solely on point-in-time status."],
      },
      {
        title: "Event Correlation",
        content: ["Combining metrics, logs, events, and infrastructure context can accelerate root-cause analysis when problems cross multiple layers of the environment."],
      },
    ],
  },

  automation: {
    title: "Automation / AI",
    description:
      "Intelligent automation, AI agents, workflows, and infrastructure operations.",
    sections: [
      {
        title: "n8n",
        content: ["n8n provides workflow automation capable of connecting infrastructure platforms, services, APIs, alerts, and future AI workflows."],
      },
      {
        title: "AI Agents",
        content: ["AI agents are being explored as a way to understand infrastructure documentation, answer operational questions, analyze environment health, and eventually assist with controlled infrastructure operations."],
      },
      {
        title: "Network Automation",
        content: ["Automation projects focus on monitoring, configuration management, documentation, repeatable workflows, and infrastructure operations."],
      },
    ],
  },


  homekit: {
    title: "Apple HomeKit",
    description:
      "An Apple-centric smart home environment integrating HomeKit, Home Assistant, Homebridge, Scrypted, and connected devices across the segmented home network.",
    sections: [
      {
        title: "Architecture",
        content: [
          "The smart home environment is built around Apple HomeKit as the primary user-facing ecosystem while Home Assistant provides broader device integration, automation, and infrastructure-level control.",
          "This allows Apple devices such as iPhone, Apple Watch, HomePod, and iPad to provide a simple user experience while Home Assistant handles more complex automation and cross-platform integrations behind the scenes.",
          "The architecture intentionally separates the user-facing smart-home experience from the deeper automation and integration layer.",
        ],
      },
      {
        title: "Home Assistant",
        content: [
          "Home Assistant serves as the central smart-home automation and integration platform.",
          "It provides support for devices and services that may not be natively supported by Apple HomeKit and allows more advanced automations, conditions, cross-platform integrations, and device control.",
          "Home Assistant also provides a useful bridge between the smart-home environment and the broader home-lab infrastructure.",
        ],
      },
      {
        title: "HomeKit Integration",
        content: [
          "Apple HomeKit provides the primary user-facing interface for supported devices and automations.",
          "Selected Home Assistant entities can be exposed into HomeKit so that Apple devices can control approved services without exposing the full Home Assistant environment.",
          "This keeps the Apple Home experience simple while preserving Home Assistant as the deeper integration and automation layer.",
        ],
      },
      {
        title: "Homebridge",
        content: [
          "Homebridge is used where compatibility is required for devices or services that do not provide native HomeKit support.",
          "It allows selected unsupported devices to be presented to Apple Home as though they were native HomeKit accessories.",
          "This extends compatibility without requiring the entire smart-home environment to depend on a single vendor ecosystem.",
        ],
      },
      {
        title: "Scrypted",
        content: [
          "Scrypted is used primarily for camera and video integration.",
          "It provides a bridge between supported camera systems and Apple HomeKit and is useful for bringing camera feeds and related capabilities into the Apple smart-home experience.",
          "This allows the camera platform to remain part of the broader security architecture while still being accessible through Apple Home.",
        ],
      },
      {
        title: "Zigbee2MQTT & Mosquitto",
        content: [
          "Zigbee2MQTT and Mosquitto provide an additional device-integration layer for Zigbee-based smart-home hardware.",
          "Zigbee2MQTT translates Zigbee device communication into MQTT messages, while Mosquitto provides the MQTT messaging layer used by supporting services.",
          "This allows Zigbee devices to participate in Home Assistant automations without requiring every device to depend on a vendor cloud platform.",
        ],
      },
      {
        title: "Network Segmentation",
        content: [
          "Smart-home devices operate within the broader VLAN and firewall architecture rather than being placed on one unrestricted network.",
          "IoT devices are isolated from trusted endpoints and infrastructure services unless specific communication paths are required.",
          "Home Assistant, bridges, and supporting services can therefore communicate with smart-home devices through controlled network paths while unnecessary lateral access remains restricted.",
          "This allows the smart-home environment to remain functional without treating every IoT device as a trusted endpoint.",
        ],
      },
      {
        title: "Automation Strategy",
        content: [
          "Automations are divided between simple Apple Home routines and more advanced Home Assistant workflows.",
          "Apple Home is useful for straightforward user-facing automations and scenes.",
          "Home Assistant is used where automations require multiple conditions, cross-platform integrations, network awareness, complex logic, or deeper control over supporting infrastructure.",
          "The goal is to use the simplest platform that can reliably implement the desired behavior rather than forcing every automation into one system.",
        ],
      },
      {
        title: "Design Philosophy",
        content: [
          "The overall goal is to keep the user experience simple while allowing the underlying architecture to remain flexible, secure, and vendor-agnostic where practical.",
          "Apple HomeKit provides the polished user-facing control layer, while Home Assistant, Homebridge, Scrypted, Zigbee2MQTT, Mosquitto, and the segmented network provide the deeper integration platform behind it.",
          "This creates a layered smart-home architecture in which usability does not require abandoning network segmentation, security, or infrastructure control.",
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    description:
      "Active and planned projects used to expand the capabilities, automation, resilience, and operational maturity of the environment.",
    sections: [
      {
        title: "CI/CD Pipeline",
        content: [
          "GitHub-based development and deployment workflows are being implemented to build hands-on experience with modern source control, CI/CD practices, automated deployment, and infrastructure change management.",
          "The portfolio website itself serves as an initial implementation, with code developed locally, committed to GitHub, and automatically deployed to Vercel.",
        ],
      },
      {
        title: "AI Network Agent",
        content: [
          "The AI Network Agent project is intended to create an assistant capable of understanding the architecture and documentation of the home lab.",
          "Initial capabilities will focus on answering questions about the environment and retrieving infrastructure documentation.",
          "Future stages may incorporate monitoring and observability information, health analysis, network status, incident summaries, and controlled operational workflows.",
          "Any future ability to execute infrastructure changes will be separated through authenticated automation layers rather than giving an AI system unrestricted direct access to network devices or virtualization platforms.",
        ],
      },
      {
        title: "Proxmox High Availability",
        content: [
          "Proxmox High Availability is planned as a future infrastructure project.",
          "The current environment operates as a five-node Proxmox cluster, but cluster membership alone does not mean workloads automatically restart on another node when a host fails.",
          "The HA project will evaluate which workloads actually require automatic recovery rather than enabling HA indiscriminately for every virtual machine and container.",
          "The project will include reviewing shared-storage requirements, workload dependencies, network availability, node capacity, quorum behavior, migration capability, and recovery priorities.",
          "Selected services will then be configured and tested for automatic recovery following simulated node failures.",
          "The objective is to build a deliberate HA architecture based on service criticality rather than simply enabling a feature.",
        ],
      },
      {
        title: "Infrastructure as Code",
        content: [
          "A future project will move more infrastructure configuration into version-controlled and repeatable deployment models.",
          "Potential technologies include Ansible, Terraform or OpenTofu, Docker Compose, GitHub Actions, and supporting automation scripts.",
          "Public repositories will contain sanitized examples and documentation while operational configuration containing internal addressing, ports, hostnames, or other sensitive topology information will remain private.",
        ],
      },
      {
        title: "Advanced Monitoring & Observability",
        content: [
          "Monitoring and observability will continue to mature beyond basic availability checks.",
          "Planned work includes stronger metric collection, centralized logging, dashboards, alerting, historical performance analysis, and event correlation across networking, compute, storage, and applications.",
        ],
      },
      {
        title: "Future Projects",
        content: [
          "Additional projects will continue to expand the environment across infrastructure automation, security, DevOps, AI, resilience, monitoring, observability, configuration management, and disaster recovery.",
          "The lab is intentionally treated as an evolving platform rather than a finished collection of applications.",
        ],
      },
    ],
  },
};

type SectionName = keyof typeof homelabData;

export default async function HomeLabSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = homelabData[section as SectionName];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            Keith Layne
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/homelab"
              className="text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              ← Home Lab
            </Link>

            <Link href="/" className="text-sm text-slate-500 hover:text-blue-600">
              Main Site
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Home Lab
          </p>
          <h1 className="mt-3 text-5xl font-bold">{data.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {data.description}
          </p>
        </div>
      </section>

      {section === "overview" && (
        <section className="mx-auto max-w-7xl px-6 pt-12">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
            <img
              src="/network-architecture.png"
              alt="Home Lab Network Architecture"
              className="w-full object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-500">
            High-level architecture of the compute, network, storage, security,
            and application environment.
          </p>
        </section>
      )}

      {section === "network" && (
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Core Architecture
            </p>
            <div className="space-y-3 font-mono text-sm leading-7 text-slate-700">
              <p>AT&T Fiber</p>
              <p className="pl-6">↓</p>
              <p>AT&T BGW320</p>
              <p className="pl-6">↓</p>
              <p>UDM Pro Active / Passive Gateway Pair</p>
              <p className="pl-6">↓</p>
              <p>10GbE SFP+ Backbone</p>
              <p className="pl-6">↓</p>
              <p>Managed UniFi Switching</p>
              <p className="pl-6">↓</p>
              <p>
                Proxmox • UNAS Pro • Wireless • Cameras • IoT • Trusted Clients
              </p>
            </div>
          </div>
        </section>
      )}

      {section === "compute" && (
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Compute Architecture
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Primary Compute
                </p>
                <p className="mt-3 text-2xl font-bold">3 × Minisforum MS-01</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Primary Proxmox compute tier for higher-capacity infrastructure
                  and application workloads.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Secondary Compute
                </p>
                <p className="mt-3 text-2xl font-bold">2 × Beelink EQ14</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lightweight compute tier for supporting services,
                  experimentation, and lower-demand workloads.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center text-sm font-semibold text-slate-500">
              5-Node Proxmox Cluster
              <span className="mx-3">•</span>
              10GbE Infrastructure
              <span className="mx-3">•</span>
              Shared Storage
            </div>
          </div>
        </section>
      )}

      {section === "storage" && (
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Storage Architecture
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Platform
                </p>
                <p className="mt-3 text-2xl font-bold">UNAS Pro</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Capacity
                </p>
                <p className="mt-3 text-2xl font-bold">6 Drives / ~40 TB</p>
                <p className="mt-2 text-sm text-slate-500">Usable capacity after RAID 5</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Protection
                </p>
                <p className="mt-3 text-2xl font-bold">RAID 5</p>
                <p className="mt-2 text-sm text-slate-500">
                  Single-drive fault tolerance
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-4">
          {data.sections.map((item, index) => (
            <details
              key={item.title}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold transition hover:bg-slate-50">
                {item.title}
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-slate-200 px-6 py-6 text-slate-600">
                <div className="space-y-5">
                  {item.content.map((paragraph) => (
                    <p key={paragraph} className="leading-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

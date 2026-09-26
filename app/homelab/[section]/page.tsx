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
      "A self-hosted application ecosystem spanning infrastructure, identity, security, media, personal cloud, smart home, data services, remote access, dashboards, and automation.",
    sections: [
      {
        title: "Application Architecture",
        content: [
          "The application environment is intentionally modular rather than being built around one all-purpose server.",
          "Proxmox provides the virtualization layer, Docker provides the application-container layer for many services, the UNAS Pro provides persistent storage, and the segmented UniFi network controls how applications communicate with users and with one another.",
          "This separation makes it possible to rebuild or move an application without treating the physical server hosting it as the application itself.",
          "Where practical, application runtime is treated as replaceable while persistent data, configuration, databases, and media are kept on appropriate storage and protected independently.",
        ],
      },
      {
        title: "Virtualization & Container Management",
        content: [
          "Proxmox VE provides the virtualization platform for the environment and hosts the virtual machines and Linux containers used throughout the lab.",
          "Docker provides the application-container layer for many self-hosted services, allowing application dependencies and runtime environments to be packaged separately from the underlying operating system.",
          "Portainer provides centralized visibility and management for Docker environments and containerized workloads.",
          "This creates a layered model in which physical hardware provides capacity, Proxmox provides virtualization, Linux hosts provide operating-system services, and Docker provides the application runtime.",
        ],
      },
      {
        title: "Network & Core Infrastructure Services",
        content: [
          "UniFi Network provides centralized administration of routing, switching, wireless networking, VLANs, firewall policy, connected clients, and network topology.",
          "UniFi Protect provides the camera and video-surveillance platform used within the dedicated security-camera network segment.",
          "AdGuard Home provides DNS filtering, local DNS services, client visibility, and DNS rewrites.",
          "Unbound provides recursive DNS resolution behind AdGuard Home, allowing DNS resolution to remain under local control rather than depending entirely on a third-party recursive resolver.",
          "WireGuard provides secure remote access into the environment. Remote clients are placed into the dedicated VPN VLAN and are then subject to firewall policy controlling which internal resources they may reach.",
          "Traefik provides reverse-proxy and application-routing services, allowing web applications to be accessed through consistent DNS names and HTTPS endpoints instead of raw IP addresses and port numbers.",
        ],
      },
      {
        title: "Identity, Credentials & Secure Access",
        content: [
          "Authentik provides centralized identity and authentication services for supported internal applications.",
          "Vaultwarden provides self-hosted password and credential management.",
          "SSL/TLS certificate management is integrated with the reverse-proxy architecture so supported internal web applications can use HTTPS and consistent certificate handling.",
          "Apache Guacamole provides browser-based remote access to supported systems, creating a centralized administrative access path rather than requiring every management protocol to be exposed directly to endpoint devices.",
        ],
      },
      {
        title: "Video Streaming",
        content: [
          "Plex provides the primary self-hosted video-media experience for the local movie and television library.",
          "Jellyfin provides an additional open-source media-streaming platform and an alternative path for accessing locally stored video content.",
          "Both platforms consume centrally stored media rather than tying the media library directly to the lifecycle of the virtual machine or container running the application.",
          "Separating the application from the media library makes application rebuilds, upgrades, migrations, and experimentation less disruptive to the underlying content.",
        ],
      },
      {
        title: "Music Streaming",
        content: [
          "Navidrome provides self-hosted music streaming and personal music-library access.",
          "The service provides a private streaming experience similar in concept to a commercial music platform while keeping ownership and storage of the underlying music collection inside the home environment.",
          "Lidarr complements the music environment by helping manage and organize the underlying music library.",
          "The music library remains separate from the Navidrome application itself so the application can be maintained or rebuilt without making the media collection dependent on that specific runtime instance.",
        ],
      },
      {
        title: "Photo & Video Library",
        content: [
          "Immich provides self-hosted photo and video backup, organization, browsing, and library management.",
          "It is used as the local replacement for a cloud photo platform such as Google Photos, keeping personal photos and videos under local storage and infrastructure control.",
          "The application is separated from the underlying photo and video data so the media library remains independent from the lifecycle of the Immich application host.",
          "This also makes backup, capacity planning, storage monitoring, and recovery part of the broader infrastructure design rather than leaving them entirely to a third-party cloud service.",
        ],
      },
      {
        title: "Media Automation",
        content: [
          "Sonarr manages television-series library automation.",
          "Radarr manages movie-library automation.",
          "Lidarr manages music-library automation.",
          "Prowlarr centralizes indexer management for the media-automation stack.",
          "qBittorrent provides download-client functionality for supported automated workflows.",
          "NZBGet provides Usenet download-client functionality.",
          "Gluetun provides a dedicated VPN networking layer for selected download-related containers so their traffic can be isolated from the rest of the application stack.",
          "Together, these services reduce repetitive manual library-management work while keeping each function separated into a distinct service.",
        ],
      },
      {
        title: "Media Requests, Monitoring & Analytics",
        content: [
          "Overseerr provides request-management workflows for the Plex ecosystem.",
          "Jellyseerr provides similar request-management capabilities for Jellyfin-oriented workflows.",
          "Tautulli provides Plex usage history, activity monitoring, and statistics.",
          "Jellystat provides usage statistics and analytics for Jellyfin.",
          "These applications separate media consumption from media administration and provide visibility into usage without requiring routine administration directly inside the primary streaming applications.",
        ],
      },
      {
        title: "Smart Home Applications",
        content: [
          "Home Assistant serves as the central smart-home integration and automation platform.",
          "Apple HomeKit provides the primary Apple-facing user experience for supported devices and automations.",
          "Homebridge extends HomeKit compatibility to selected devices and services that do not provide native Apple Home support.",
          "Scrypted provides camera and video integration between supported camera systems and Apple HomeKit.",
          "Zigbee2MQTT provides integration for Zigbee-based devices and exposes those devices through MQTT.",
          "Mosquitto provides the MQTT messaging broker used by Zigbee2MQTT and other event-driven integrations.",
          "These services operate within the same segmented network architecture as the rest of the lab rather than placing all smart-home devices on an unrestricted trusted network.",
        ],
      },
      {
        title: "Data Services",
        content: [
          "PostgreSQL provides relational database services for applications that require structured persistent data.",
          "Redis provides an in-memory data store and caching layer for applications and supporting services that benefit from fast temporary data access.",
          "Running data services as distinct infrastructure components creates clear dependencies that can be monitored, backed up, secured, and maintained separately from the applications that consume them.",
        ],
      },
      {
        title: "Monitoring & Observability Applications",
        content: [
          "Prometheus collects time-series metrics from infrastructure and application targets.",
          "Grafana provides dashboards and visualization for operational metrics and other telemetry.",
          "Loki provides centralized log aggregation and allows logs to be explored alongside other operational data.",
          "Alertmanager provides alert-routing and notification capabilities for conditions identified by the monitoring stack.",
          "Uptime Kuma provides straightforward service and endpoint availability monitoring.",
          "Blackbox Exporter performs endpoint probes to measure reachability and response behavior.",
          "Node Exporter exposes Linux host metrics such as CPU, memory, filesystem, and operating-system information.",
          "SNMP Exporter allows SNMP-capable infrastructure devices to provide metrics to the monitoring platform.",
          "VictoriaMetrics provides a time-series metrics storage and query backend for longer-term operational data.",
        ],
      },
      {
        title: "Dashboards & Administration",
        content: [
          "Homarr provides a centralized dashboard and launch point for commonly used self-hosted services.",
          "Portainer provides operational administration for containerized workloads.",
          "Guacamole provides centralized browser-based access to systems that require interactive remote administration.",
          "These tools reduce the need to remember individual IP addresses, ports, or management entry points and provide more consistent administration across the environment.",
        ],
      },
      {
        title: "Workflow Automation",
        content: [
          "n8n provides workflow automation across applications, APIs, infrastructure services, alerts, and future AI-driven operational workflows.",
          "It acts as an orchestration layer capable of connecting otherwise independent systems without requiring every integration to be custom-coded from scratch.",
          "The long-term design is to use controlled automation layers such as n8n between AI systems and infrastructure services rather than granting an AI agent unrestricted administrative access.",
        ],
      },
      {
        title: "Application Design Philosophy",
        content: [
          "The application platform is built around separation of concerns.",
          "Identity, DNS, remote access, media, smart home, monitoring, storage, databases, automation, and user-facing applications remain separate services with defined responsibilities.",
          "This adds more components than an all-in-one server, but it creates clearer dependencies, smaller failure domains, and better opportunities for monitoring, automation, backup, and security controls.",
          "The objective is not to run the largest possible number of applications. It is to build an environment where services are intentionally placed, understood, secured, monitored, and recoverable.",
        ],
      },
    ],
  },

  monitoring: {
    title: "Monitoring",
    description:
      "Operational monitoring focused on availability, health, resource utilization, performance, and alerting across compute, network, storage, and application services.",
    sections: [
      {
        title: "Monitoring Strategy",
        content: [
          "Monitoring is intended to answer a straightforward operational question: is the environment healthy right now, and is anything moving toward failure?",
          "The monitoring layer covers compute nodes, Linux hosts, network devices, storage, application endpoints, and supporting services.",
          "The goal is to detect problems before they become user-visible outages and to provide enough context to identify whether the problem is at the application, operating-system, network, storage, or physical-resource layer.",
          "Monitoring is treated separately from observability. Monitoring focuses primarily on known health indicators and conditions, while observability provides the deeper telemetry required to investigate why a system is behaving the way it is.",
        ],
      },
      {
        title: "Prometheus",
        content: [
          "Prometheus provides the primary metrics-collection model for the monitoring environment.",
          "It collects time-series measurements from exporters and compatible applications so infrastructure behavior can be evaluated over time rather than through one-time manual checks.",
          "Metrics such as CPU usage, memory utilization, filesystem consumption, network behavior, service availability, and other infrastructure signals can be queried and used to drive dashboards and alerts.",
        ],
      },
      {
        title: "VictoriaMetrics",
        content: [
          "VictoriaMetrics provides a time-series metrics storage and query backend for operational data.",
          "It complements the metrics-collection architecture by providing an efficient location for retaining and querying time-series information.",
          "Longer-term metric retention allows current conditions to be compared with historical behavior, which is valuable for capacity planning, trend analysis, and troubleshooting intermittent problems.",
        ],
      },
      {
        title: "Grafana",
        content: [
          "Grafana provides the visualization layer for infrastructure and application metrics.",
          "Dashboards can combine data from different parts of the environment and present them in a way that makes changes, trends, saturation, and abnormal behavior easier to recognize.",
          "Rather than checking every system independently, Grafana provides a consolidated operational view across compute, storage, networking, and applications.",
        ],
      },
      {
        title: "Uptime Kuma",
        content: [
          "Uptime Kuma provides straightforward service and endpoint availability monitoring.",
          "It is useful for answering whether a service is reachable, whether an endpoint is responding, and whether availability has changed over time.",
          "This provides a simple service-level view that complements the lower-level resource metrics collected elsewhere in the monitoring stack.",
        ],
      },
      {
        title: "Node Exporter",
        content: [
          "Node Exporter exposes operating-system and hardware-related metrics from Linux systems.",
          "This includes measurements such as CPU utilization, memory use, filesystem capacity, load, and other host-level indicators.",
          "These metrics are important because an application can appear unhealthy when the underlying problem is actually resource exhaustion on the host running it.",
        ],
      },
      {
        title: "SNMP Exporter",
        content: [
          "SNMP Exporter provides a way to collect metrics from infrastructure devices that expose operational information through SNMP.",
          "This extends the monitoring model beyond Linux servers and applications into network and infrastructure hardware.",
          "Bringing these metrics into the same monitoring environment makes it easier to correlate application behavior with underlying network or device conditions.",
        ],
      },
      {
        title: "Blackbox Exporter",
        content: [
          "Blackbox Exporter performs endpoint-style probes that test services from the outside rather than relying entirely on internal application metrics.",
          "This helps answer whether a service can actually be reached and whether the expected protocol or endpoint is responding.",
          "That distinction matters because an application process may be running while DNS, routing, TLS, firewall policy, or the reverse proxy prevents users from successfully reaching it.",
        ],
      },
      {
        title: "Alertmanager",
        content: [
          "Alertmanager provides the alert-handling layer for conditions detected by the monitoring environment.",
          "The purpose of alerting is not to generate a notification for every change. It is to identify conditions that are actionable or that indicate meaningful degradation.",
          "Examples include service outages, abnormal resource consumption, storage thresholds, endpoint failures, or infrastructure conditions that could become outages if left unresolved.",
          "As the environment matures, alert quality is as important as alert quantity. Excessive low-value alerts create noise and make meaningful problems easier to miss.",
        ],
      },
      {
        title: "Storage Monitoring",
        content: [
          "Storage monitoring is particularly important because capacity problems can develop gradually and then appear suddenly at the application layer.",
          "The Plex filesystem reaching 100 percent utilization demonstrated why a service can technically still be running while the infrastructure beneath it has already reached a critical condition.",
          "Storage monitoring therefore includes capacity, growth, filesystem utilization, and availability rather than relying only on whether an application is responding.",
          "The UNAS Pro and its approximately 40 TB of usable RAID 5 capacity also make storage trend analysis and capacity forecasting increasingly important.",
        ],
      },
      {
        title: "Network Monitoring",
        content: [
          "Network monitoring focuses on the availability and health of the infrastructure connecting users, applications, compute, and storage.",
          "The environment includes redundant UniFi gateways, managed switching, multiple VLANs, WireGuard remote access, DNS services, and a 10GbE SFP+ backbone.",
          "Monitoring these dependencies helps distinguish an application outage from a routing, DNS, gateway, switching, or connectivity problem.",
        ],
      },
      {
        title: "Application Monitoring",
        content: [
          "Application monitoring combines endpoint availability with supporting infrastructure metrics.",
          "A successful health check confirms that an application is reachable, but deeper host and dependency metrics are still needed to determine whether the service is operating normally.",
          "This layered model prevents application health from being reduced to a single up-or-down result.",
        ],
      },
      {
        title: "Monitoring Design Philosophy",
        content: [
          "The monitoring design is intended to provide early warning, operational awareness, and actionable information rather than simply produce dashboards.",
          "The most useful monitoring connects service health to the resources and dependencies supporting that service.",
          "Over time, the goal is to move from reactive troubleshooting toward proactive detection of capacity, reliability, and performance issues.",
        ],
      },
    ],
  },

  observability: {
    title: "Observability",
    description:
      "Deeper operational insight through centralized metrics, logs, dashboards, telemetry, historical analysis, and correlation across infrastructure and applications.",
    sections: [
      {
        title: "Observability Strategy",
        content: [
          "Observability is intended to answer questions that basic health monitoring cannot answer on its own.",
          "Monitoring can identify that a service is slow, unavailable, or consuming unusual resources. Observability helps investigate why that behavior is occurring and what other systems changed at the same time.",
          "The environment therefore combines metrics, logs, dashboards, historical telemetry, and infrastructure context so troubleshooting can move beyond checking individual systems one at a time.",
        ],
      },
      {
        title: "Metrics",
        content: [
          "Prometheus and VictoriaMetrics provide the metrics foundation for the environment.",
          "Metrics make infrastructure behavior measurable over time and allow current conditions to be compared with prior baselines.",
          "CPU, memory, storage, network, service, and device metrics can reveal saturation, gradual degradation, recurring patterns, and abnormal behavior that may not be obvious from an isolated point-in-time inspection.",
        ],
      },
      {
        title: "Centralized Logging with Loki",
        content: [
          "Loki provides centralized log aggregation for supported workloads.",
          "Centralized logs reduce the need to sign into multiple servers and manually inspect individual log files when troubleshooting a problem that crosses service boundaries.",
          "Logs provide the event-level detail that metrics often cannot, including application errors, authentication events, service restarts, failed connections, and other operational messages.",
          "The value increases when logs can be viewed in the same operational context as metrics and dashboards.",
        ],
      },
      {
        title: "Grafana Dashboards",
        content: [
          "Grafana acts as the primary visualization layer for observability data.",
          "Dashboards can combine metrics from multiple infrastructure layers so related systems can be examined together rather than as isolated components.",
          "A troubleshooting view can therefore include application health, compute utilization, storage behavior, and network-related measurements in one place.",
          "The objective is not to create dashboards for appearance alone. Each dashboard should help answer a specific operational question.",
        ],
      },
      {
        title: "Historical Analysis",
        content: [
          "Historical telemetry makes it possible to determine whether an event is new, recurring, gradually worsening, or part of a normal pattern.",
          "This is particularly useful for storage growth, memory pressure, CPU saturation, network utilization, and intermittent service behavior.",
          "Instead of relying on memory or screenshots, historical data provides evidence that can be compared across days, weeks, or longer periods.",
        ],
      },
      {
        title: "Event Correlation",
        content: [
          "Many infrastructure failures are not isolated to one component.",
          "An application may become slow because of a saturated filesystem, a DNS issue, a failed mount, a network path problem, database latency, or pressure on the compute host.",
          "Observability is intended to make those relationships easier to see by correlating timestamps, metrics, logs, availability changes, and infrastructure events.",
          "The goal is to reduce mean time to identify the actual failure domain rather than repeatedly troubleshooting the application that happens to show the first visible symptom.",
        ],
      },
      {
        title: "Service Dependency Awareness",
        content: [
          "The lab contains many layered dependencies: applications rely on virtual machines or containers, which rely on compute hosts, networking, DNS, storage, databases, reverse proxy routing, and sometimes authentication services.",
          "Observability becomes more useful when those dependencies are understood rather than treating every alert as an independent event.",
          "This is especially important as the environment moves toward high availability and greater automation, because automated recovery is only valuable when the dependencies required by a recovered service are also healthy.",
        ],
      },
      {
        title: "Troubleshooting Model",
        content: [
          "The preferred troubleshooting model starts with symptoms and then moves through evidence rather than immediately changing configuration.",
          "Availability checks identify what users can reach, metrics identify resource and performance conditions, logs provide event detail, and architecture knowledge identifies the dependencies that should be inspected next.",
          "This approach reduces the temptation to solve problems by disabling security controls or making unverified configuration changes.",
        ],
      },
      {
        title: "Observability & AI",
        content: [
          "The observability layer will become an important data source for the planned AI Network Agent.",
          "The initial AI design is read-oriented: the agent should be able to understand documentation and eventually consume selected monitoring and observability information to summarize health, identify anomalies, and assist with troubleshooting.",
          "Operational actions will remain behind controlled automation and approval mechanisms rather than giving an AI model unrestricted access to infrastructure.",
        ],
      },
      {
        title: "Observability Design Philosophy",
        content: [
          "The objective is to make the environment explainable.",
          "When something fails, the long-term goal is to have enough telemetry to determine what changed, which dependency was affected, when the problem began, and how the failure propagated.",
          "That makes observability a troubleshooting and reliability capability rather than simply another collection of tools.",
        ],
      },
    ],
  },

  automation: {
    title: "Automation / AI",
    description:
      "Workflow automation, CI/CD, infrastructure orchestration, and a controlled path toward AI-assisted operations.",
    sections: [
      {
        title: "Automation Strategy",
        content: [
          "Automation is being introduced incrementally rather than attempting to automate the entire environment at once.",
          "The first objective is to eliminate repeatable manual tasks, make changes more consistent, and create workflows that are understandable and reversible.",
          "The longer-term objective is to connect infrastructure, monitoring, documentation, and AI through controlled automation layers without giving any single tool unrestricted access to the environment.",
        ],
      },
      {
        title: "n8n Workflow Automation",
        content: [
          "n8n provides the primary workflow-orchestration platform for the home lab.",
          "It can connect applications, APIs, alerts, webhooks, infrastructure services, and future AI workflows into repeatable processes.",
          "This makes n8n useful for tasks such as reacting to events, collecting data from multiple systems, sending notifications, updating documentation, or triggering controlled administrative workflows.",
          "The platform also provides an important separation layer between a future AI agent and the systems it may eventually be allowed to interact with.",
        ],
      },
      {
        title: "GitHub & CI/CD",
        content: [
          "GitHub is being used as the source-control foundation for development, documentation, and automation work.",
          "The portfolio website provides the first practical CI/CD implementation: changes are developed locally, committed to Git, pushed to GitHub, and automatically deployed through Vercel.",
          "That workflow provides hands-on experience with version control, deployment pipelines, rollback history, change tracking, and the separation between development and production deployment.",
          "The same principles can later be extended to home-lab configuration and automation rather than making production changes manually without version history.",
        ],
      },
      {
        title: "Public vs Private Repositories",
        content: [
          "Public repositories are used for sanitized examples, portfolio content, and documentation that does not expose sensitive operational details.",
          "Private repositories are intended for configuration that may contain internal addressing, ports, DNS names, topology mappings, infrastructure scripts, and other operational information.",
          "Passwords, API keys, tokens, private keys, and other secrets should not be committed to either public or private Git repositories.",
          "This creates a clear boundary between demonstrating technical work publicly and protecting the information required to operate the actual environment.",
        ],
      },
      {
        title: "AI Network Agent",
        content: [
          "The planned AI Network Agent will begin as a read-oriented assistant rather than an autonomous infrastructure administrator.",
          "Its first role will be to understand the lab architecture and documentation so it can answer questions about services, dependencies, network design, and operational procedures.",
          "Later stages can incorporate selected monitoring and observability data so the agent can summarize environment health, help identify anomalies, and assist with root-cause analysis.",
          "Any future ability to make changes will be mediated through authenticated automation workflows and explicit controls rather than unrestricted direct access to Proxmox, UniFi, storage, or other critical platforms.",
        ],
      },
      {
        title: "Conversational Operations",
        content: [
          "A long-term goal is to interact with the environment conversationally from a laptop rather than having to remember every management interface, command, and dashboard location.",
          "The value is not simply natural-language control. The more important goal is to create a common interface that can retrieve documentation, summarize telemetry, explain dependencies, and eventually initiate approved workflows.",
          "The conversational layer should remain an interface to controlled systems rather than becoming a substitute for authentication, authorization, auditability, or change management.",
        ],
      },
      {
        title: "Network Automation",
        content: [
          "Network automation is intended to reduce repetitive administration and provide more consistent documentation and operational workflows.",
          "Potential use cases include inventory updates, configuration validation, monitoring responses, documentation generation, and controlled device-management workflows.",
          "Because the network is segmented into multiple trust zones, automation must preserve the same least-privilege boundaries used by manually administered services.",
        ],
      },
      {
        title: "Infrastructure as Code",
        content: [
          "Infrastructure as Code is part of the upcoming roadmap rather than a completed capability.",
          "The goal is to move more configuration into repeatable, version-controlled definitions using technologies such as Ansible, Terraform or OpenTofu, Docker Compose, GitHub Actions, and supporting scripts.",
          "This would reduce configuration drift, improve reproducibility, and make infrastructure changes easier to review before implementation.",
        ],
      },
      {
        title: "Human Approval & Safety Boundaries",
        content: [
          "AI-assisted operations are intentionally designed around human approval.",
          "Read-only access, analysis, and recommendations can be introduced earlier because they carry substantially less operational risk than direct infrastructure changes.",
          "Actions that modify routing, firewall policy, virtualization, storage, identity, or other critical services should pass through narrowly scoped workflows with authentication, authorization, logging, and explicit approval where appropriate.",
          "The objective is to gain the efficiency of automation without losing accountability or creating an unrestricted administrative path into the environment.",
        ],
      },
      {
        title: "Automation Design Philosophy",
        content: [
          "Automation should make the environment more predictable, not merely more complicated.",
          "A useful automated process should be repeatable, observable, auditable, and easier to recover from than the manual process it replaces.",
          "The long-term architecture therefore combines Git-based change control, n8n orchestration, monitoring and observability data, and AI assistance behind clearly defined security boundaries.",
        ],
      },
    ],
  },

  homekit: {
    title: "Apple HomeKit",
    description:
      "An Apple-centric smart home environment integrating HomeKit, Home Assistant, Homebridge, Scrypted, Zigbee2MQTT, Mosquitto, and segmented IoT networking.",
    sections: [
      {
        title: "Smart Home Architecture",
        content: [
          "The smart-home environment is built as a layered architecture rather than requiring every device to work natively with one platform.",
          "Apple HomeKit provides the primary user-facing experience, while Home Assistant provides broader integration, automation, and infrastructure-level control behind the scenes.",
          "Homebridge, Scrypted, Zigbee2MQTT, and Mosquitto extend compatibility and allow devices from different ecosystems to participate in a common smart-home environment.",
          "This approach keeps the user experience simple while allowing the underlying system to remain flexible and more vendor-independent.",
        ],
      },
      {
        title: "Apple HomeKit",
        content: [
          "Apple HomeKit provides the primary Apple-facing control layer for supported smart-home devices and automations.",
          "It allows devices and scenes to be accessed through the Apple Home experience across supported Apple devices.",
          "The HomeKit layer is intentionally treated as the user interface rather than requiring it to perform every integration and automation function by itself.",
        ],
      },
      {
        title: "Home Assistant",
        content: [
          "Home Assistant serves as the central integration and automation platform.",
          "It provides support for devices and services that may not be natively supported by Apple HomeKit and allows more complex automations, conditions, integrations, and device relationships.",
          "Selected entities can be exposed into HomeKit so the Apple-facing experience remains simple while Home Assistant performs the deeper orchestration work.",
          "Home Assistant also creates a bridge between smart-home automation and the broader home-lab environment.",
        ],
      },
      {
        title: "Homebridge",
        content: [
          "Homebridge extends HomeKit compatibility to selected devices and services that do not provide native Apple Home integration.",
          "This allows existing devices to participate in the Apple Home environment without requiring every device to be replaced with hardware from a single ecosystem.",
          "Homebridge therefore acts as a compatibility layer rather than the primary automation engine.",
        ],
      },
      {
        title: "Scrypted",
        content: [
          "Scrypted is used primarily for camera and video integration.",
          "It bridges supported camera systems into the Apple smart-home environment and allows camera capabilities to be consumed through Apple Home.",
          "This keeps the camera platform integrated with the broader security architecture while still providing a convenient Apple-facing experience.",
        ],
      },
      {
        title: "Zigbee2MQTT",
        content: [
          "Zigbee2MQTT provides an integration layer for Zigbee-based smart-home devices.",
          "It translates Zigbee device communication into MQTT messages that can be consumed by Home Assistant and other supporting services.",
          "This reduces dependence on separate vendor-specific cloud hubs and provides greater local control over supported Zigbee devices.",
        ],
      },
      {
        title: "Mosquitto MQTT",
        content: [
          "Mosquitto provides the MQTT messaging broker used by Zigbee2MQTT and other event-driven integrations.",
          "MQTT provides a lightweight publish-and-subscribe communication model that allows devices and services to exchange state and event information without requiring tightly coupled point-to-point integrations.",
          "This makes the messaging layer reusable across multiple smart-home workflows.",
        ],
      },
      {
        title: "Camera Integration",
        content: [
          "The camera environment is kept on a dedicated Security Camera VLAN rather than sharing the same trust zone as general-purpose user devices.",
          "Scrypted and supporting services provide controlled integration between the camera environment and Apple HomeKit.",
          "This allows camera functionality to be exposed where needed without making the camera network broadly accessible to the rest of the environment.",
        ],
      },
      {
        title: "IoT Network Segmentation",
        content: [
          "Smart-home and IoT devices operate inside the broader VLAN and firewall architecture rather than being placed on a single unrestricted home network.",
          "IoT devices are isolated from trusted endpoints and infrastructure services unless a specific communication path is required.",
          "Home Assistant and bridge services can therefore communicate with smart-home devices through controlled network rules while unnecessary lateral access remains restricted.",
          "The design recognizes that convenience devices should not automatically receive the same level of trust as laptops, infrastructure systems, or administrative endpoints.",
        ],
      },
      {
        title: "Automation Strategy",
        content: [
          "Simple user-facing routines and scenes can remain within Apple Home where that provides the easiest experience.",
          "Home Assistant is used where automations require multiple conditions, cross-platform integrations, more complex logic, or deeper interaction with supporting services.",
          "The goal is to use the simplest platform capable of reliably implementing a particular automation rather than forcing every workflow into one tool.",
        ],
      },
      {
        title: "Local Control & Resilience",
        content: [
          "A major design goal is to keep as much smart-home functionality local as practical.",
          "Local platforms such as Home Assistant, Homebridge, Zigbee2MQTT, Mosquitto, and Scrypted reduce unnecessary dependence on vendor cloud services for core integrations.",
          "Local control also improves the ability to troubleshoot dependencies and integrate smart-home behavior with the rest of the home-lab infrastructure.",
        ],
      },
      {
        title: "HomeKit Design Philosophy",
        content: [
          "The user experience should remain straightforward even if the infrastructure behind it is sophisticated.",
          "Apple HomeKit provides the polished user-facing control layer, while Home Assistant and supporting services provide deeper compatibility, automation, messaging, and integration.",
          "The result is a layered smart-home architecture that prioritizes usability without abandoning segmentation, local control, and infrastructure security.",
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
